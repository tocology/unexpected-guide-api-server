import models from '../models';
import CloudFront from '../helpers/CloudFront';

function get (req, res, next) {
  const { voiceId } = req.params;

  models.Voice.findOne({
    include: [
      { model: models.Art, as: 'art', required: true, include: [
        { model: models.Image, as: 'images', through: { attributes: [] } }
      ]},
      { model: models.User, as: 'docent', required: true }
    ],
    where: {
      'voiceId': voiceId
    }
  }).then(voice => {
    const preUrl = voice.getDataValue('url');
    voice.setDataValue('url', CloudFront.getSignedUrl(preUrl));

    res.json(voice);
  }).catch(e => next(e));
}

export default {
  get
}