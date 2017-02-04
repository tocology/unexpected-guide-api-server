import express from 'express';
import docentCtrl from '../controllers/docent.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(docentCtrl.list);

export default router;
