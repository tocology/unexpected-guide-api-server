import express from 'express';

import imageCtrl from '../controllers/image.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:imageId')
  .get(imageCtrl.get);

export default router;