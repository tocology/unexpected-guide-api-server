import models from '../models';

function listSpotByCourseId (req, res, next) {
  const { courseId } = req.params;

  models.CourseSpot.findAll({
    include: [
      { model: models.Spot, as: 'spot', required: true, attributes: { exclude: ['locationId', 'voiceId', 'artistId'] }, include: [
        { model: models.Location, as: 'location', required: true, foreignKey: { name: 'locationId', allowNull: false }},
        { model: models.Voice, as: 'voice', required: true, foreignKey: { name: 'voiceId', allowNull: false }},
        { model: models.Artist, as: 'artist', foreignKey: { name: 'artistId', allowNull: true }}
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

    return res.json(reducedSpots);
  })
    .catch(e => next(e));
}

export default {
  listSpotByCourseId
}