import models from '../models';

export const defaultPageLimit = 10;

function list (req, res, next) {
  const { userId } = req;
  const { page } = req.query;

  models.Prevoice.findAll({
    where: {
      'userId': userId
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'updatedAt DESC',
    subQuery: false
  }).then(prevoices => res.json(prevoices))
    .catch(e => next(e));
}

function get (req, res, next) {
  const { prevoiceId } = req.params;

  models.Prevoice.findOne({
    where: {
      'prevoiceId': prevoiceId
    }
  }).then(prevoice => res.json(prevoice))
    .catch(e => next(e));
}

export default {
  list, get
}

