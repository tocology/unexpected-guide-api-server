import models from '../models';

function get (req, res, next) {
  const { spotId } = req.params;

  models.Spot.findOne({
    where: {
      'spotId': spotId
    }
  }).then(spot => res.json(spot))
    .catch(e => next(e));
}
export default {
  get
}
