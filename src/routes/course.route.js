import express from 'express';
import courseCtrl from '../controllers/course.controller';
import courseSpotCtrl from '../controllers/courseSpot.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:courseId')
  .get(courseCtrl.get);

router.route('/:courseId/spots')
  .get(courseSpotCtrl.listSpotByCourseId);

export default router;