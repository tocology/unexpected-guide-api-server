import models from '../models';

export const defaultPageLimit = 10;

function list (req, res, next) {
  const { page } = req.query;

  models.State.findAll({
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'koreanName ASC',
    subQuery: false
  }).then(states => res.json(states))
    .catch(e => next(e));
}

export default {
  list
}
