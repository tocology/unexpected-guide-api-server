import express from 'express';
import validate from 'express-validation';

import Firebase from '../helpers/Firebase';
import paramValidation from '../../config/param-validation';

import courseCtrl from '../controllers/course.controller';
import courseSpotCtrl from '../controllers/courseSpot.controller';
import courseReviewCtrl from '../controllers/courseReview.controller';
import courseLogCtrl from '../controllers/courseLog.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:courseId')
  .get(courseLogCtrl.addCourseLog, courseCtrl.get);

router.route('/:courseId/spots')
  .get(courseSpotCtrl.listSpotByCourseId);

router.route('/:courseId/reviews')
  .get(courseReviewCtrl.listByCourseId);

router.route('/:courseId/reviews')
  .post(Firebase.authCheck, validate(paramValidation.createReview), courseReviewCtrl.addCourseReview);

export default router;