import models from '../models';

function listByArtId(req, res, next) {
  const { artId } = req.params;

  models.Voice.findAll({
    include: [
      { model: models.Art, as: 'Art', required: true,
        attributes: { exclude: Object.keys(models.Art.rawAttributes) } },
      { model: models.Docent, as: 'Docent', required: true }
    ],
    where: {
      '$Art.artId$': artId
    }
  }).then(voice => res.json(voice))
    .catch(e => next(e));
}

export default {
  listByArtId
}