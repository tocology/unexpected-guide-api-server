import express from 'express';
import prevoiceCtrl from '../controllers/prevoice.controller';
import Firebase from '../helpers/Firebase';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(Firebase.authCheck, prevoiceCtrl.list);

export default router;