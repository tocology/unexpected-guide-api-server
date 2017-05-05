import moment from 'moment';

import models from '../models';

function listSpotByCourseId (req, res, next) {
  const { userId } = req;
  const { courseId } = req.params;

  models.CourseSpot.findAll({
    include: [
      { model: models.Spot, as: 'spot', required: true, attributes: { exclude: ['thumbImageId', 'locationId', 'artistId'] }, include: [
        { model: models.Image, as: 'thumbImage', required: true },
        { model: models.Location, as: 'location', required: true },
        { model: models.Artist, as: 'artist' }
      ]}
    ],
    where: {
      'courseId': courseId
    },
    subQuery: false
  }).then(results => {
    const reducedSpots = results.reduce((acc, result) => {
      acc.push(result['spot']);
      return acc;
    }, []);

    // respond spots
    res.json(reducedSpots);

    models.CoursePurchase.findOne({
      where: {
        'userId': userId,
        'courseId': courseId
      }
    }).then(coursePurchase => {
      // if this request is first,
      if(!coursePurchase.getDataValue('playStartedAt')) {
        // playStartedAt should be set now
        models.CoursePurchase.update({
          'playStartedAt': moment().utc()
        }, {
          where: { 'coursePurchaseId': coursePurchase.getDataValue('coursePurchaseId')}
        });
      }
    });
  })
    .catch(e => next(e));
}

export default {
  listSpotByCourseId
}