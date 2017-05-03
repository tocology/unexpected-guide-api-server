import express from 'express';
import stateCtrl from '../controllers/state.controller';
import courseCtrl from '../controllers/course.controller';

const router = express.Router();

router.route('/')
  .get(stateCtrl.list)

router.route('/:stateId/courses')
  .get(courseCtrl.listByStateId)

export default router;
