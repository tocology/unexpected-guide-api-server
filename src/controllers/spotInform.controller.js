import models from '../models';

function listSpotInformBySpotId (req, res, next) {
  const { spotId } = req.params;

  models.SpotInform.findAll({
    include: [
      { model: models.Inform, as: 'informList' }
    ],
    where: {
      'spotId': spotId
    }
  }).then(spotInform => res.json(spotInform))
    .catch(e => next(e));
}

export default {
  listSpotInformBySpotId
}