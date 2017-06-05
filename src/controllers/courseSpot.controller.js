import moment from 'moment';

import models from '../models';

function listSpotByCourseId (req, res, next) {
  // const { userId } = req;
  const { courseId } = req.params;
  const { limit } = req.query;

  const query = {
    include: [
      { model: models.Spot, as: 'spot', required: true, attributes: { exclude: ['locationId', 'artistId'] } }
    ],
    where: {
      'courseId': courseId
    },
    order: 'priority',
    subQuery: false
  };

  models.CourseSpot.findAll(
    limit ? Object.assign(query, { limit: parseInt(limit) }) : query
  ).then(results => {
    const reducedSpots = results.reduce((acc, result) => {
      acc.push(result['spot']);
      return acc;
    }, []);

    // respond spots
    res.json(reducedSpots);

    // models.CoursePurchase.findOne({
    //   where: {
    //     'userId': userId,
    //     'courseId': courseId
    //   }
    // }).then(coursePurchase => {
    //   // if this request is first,
    //   if(!coursePurchase.getDataValue('playStartedAt')) {
    //     // playStartedAt should be set now
    //     models.CoursePurchase.update({
    //       'playStartedAt': moment().utc()
    //     }, {
    //       where: { 'coursePurchaseId': coursePurchase.getDataValue('coursePurchaseId')}
    //     });
    //   }
    // });
  })
    .catch(e => next(e));
}

export default {
  listSpotByCourseId
}