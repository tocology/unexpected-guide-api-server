import models from '../models';

function get (req, res, next) {
  const { locationId } = req.params;

  models.Location.findOne({
    where: {
      'locationId': locationId
    }
  }).then(location => res.json(location))
    .catch(e => next(e));
}

export default {
  get
}