import models from '../models';

export const defaultPageLimit = 20;

function listByArtId (req, res, next) {
  const { artId } = req.params;
  const { page } = req.query;

  models.Voice.findAll({
    include: [
      { model: models.Art, as: 'art', required: true,
        // attributes: { exclude: Object.keys(models.Art.rawAttributes) } },
        attributes: [] },
      { model: models.Docent, as: 'docent', required: true }
    ],
    where: {
      '$art.artId$': artId
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'avgStarPoint DESC',
    subQuery: false
  }).then(voice => res.json(voice))
    .catch(e => next(e));
}

export default {
  listByArtId
};