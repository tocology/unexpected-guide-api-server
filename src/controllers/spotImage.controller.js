import models from '../models';

function listImageBySpotId (req, res, next) {
  const { spotId } = req.params;

  models.SpotImage.findAll({
    include: [
      { model: models.Image, as: 'image', required: true }
    ],
    where: {
      'spotId': spotId
    },
    order: 'spotImageId',
    subQuery: false
  }).then(results => {
    const reducedImages = results.reduce((acc, result) => {
      acc.push(result['image']);
      return acc;
    }, []);

    res.json(reducedImages);
  })
}

export default {
  listImageBySpotId
}