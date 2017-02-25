import express from 'express';
import artsCtrl from '../controllers/art.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(artsCtrl.list);

router.route('/:artId')
  .get(artsCtrl.get);

export default router;
