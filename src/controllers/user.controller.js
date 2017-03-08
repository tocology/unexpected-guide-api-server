import models from '../models';

function get (req, res, next) {
  const { userId } = req.params;

  models.User.findOne({
    include: [
      { model: models.Image, as: 'profileImage' },
      { model: models.Voice, as: 'voiceList' },
      { model: models.VoicePurchase, as: 'purchaseList' }
    ],
    where: {
      'userId': userId
    }
  }).then(user => res.json(user))
    .catch(e => next(e))
}

export default {
  get
}