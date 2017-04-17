import express from 'express';
import prevoiceCtrl from '../controllers/prevoice.controller';
import Firebase from '../helpers/Firebase';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(Firebase.authCheck, prevoiceCtrl.list);

router.route('/:prevoiceId')
  .get(Firebase.authCheck, prevoiceCtrl.get);

export default router;