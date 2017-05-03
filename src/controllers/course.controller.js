import models from '../models';

export const defaultPageLimit = 20;

function listByStateId (req, res, next) {
  const { page } = req.query;
  const { stateId } = req.params;

  models.Course.findAll({
    include: [
      { model: models.User, as: 'guide', include: { model: models.Image, as: 'profileImage' }},
      { model: models.HashTag, as: 'hashTags' },
      { model: models.Image, as: 'images', through: { attributes: [] }}
    ],
    where: {
      'stateId': stateId
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'avgStarPoint DESC',
    subQuery: false
  }).then(courses => res.json(courses))
    .catch(e => next(e));
}

function get (req, res, next) {
  const { courseId } = req.params;

  models.Course.findOne({
    include: [
      { model: models.Image, as: 'mapImage' },
      { model: models.Image, as: 'routeImage' },
      { model: models.User, as: 'guide', include: { model: models.Image, as: 'profileImage' }},
      { model: models.HashTag, as: 'hashTags' },
      { model: models.Image, as: 'images', through: { attributes: [] }}
    ],
    where: {
      'courseId': courseId
    },
    subQuery: false
  }).then(course => {
    // return immediately;
    res.json(course);
  })
    .catch(e => next(e));
}

export default {
  listByStateId, get
}