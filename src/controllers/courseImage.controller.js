import models from '../models';

function listImageByCourseId (req, res, next) {
  const { courseId } = req.params;

  models.CourseImage.findAll({
    include: [
      { model: models.Image, as: 'image', required: true }
    ],
    where: {
      'courseId': courseId
    },
    order: 'courseImageId',
    subQuery: false
  }).then(results => {
    const reducedImages = results.reduce((acc, result) => {
      acc.push(result['image']);
      return acc;
    }, []);

    res.json(reducedImages);
  })
}

export default {
  listImageByCourseId
}