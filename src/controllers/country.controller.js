import models from '../models';

export const defaultPageLimit = 20;

function list (req, res, next) {
  const { page } = req.query;

  models.Country.findAll({
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'koreanName ASC',
    subQuery: false
  }).then(countries => res.json(countries))
    .catch(e => next(e));
}

export default {
  list
}