import models from '../models';

function listDocent(req, res, next) {
  models.Docent.findAll({
    include: [ models.Image ]
  }).then(docents => res.json(docents))
    .catch(e => next(e))
}

export default {
  listDocent
};