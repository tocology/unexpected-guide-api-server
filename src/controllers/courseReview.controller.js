import models from '../models';

const defaultPageLimit = 10;

function listByCourseId (req, res, next) {
  const { courseId } = req.params;
  const { page } = req.query;

  models.CourseReview.findAll({
    include: [
      { model: models.User, as: 'user', required: true }
    ],
    where: {
      'courseId': courseId
    },
    offset: (page - 1) * defaultPageLimit,
    limit: defaultPageLimit,
    order: 'updatedAt DESC',
    subQuery: false
  }).then(reviews => res.json(reviews))
    .catch(e => next(e));
}

function addCourseReview (req, res, next) {
  const { userId } = req;
  const { courseId } = req.params;
  const { starPoint, comments } = req.body;

  models.CourseReview.build({
    'courseId': courseId,
    'userId': userId,
    'starPoint': starPoint,
    'comments': comments
  }).save().then((courseReview) => {
    res.json(courseReview);
  }).catch(e => next(e));
}

export default {
  listByCourseId, addCourseReview
}