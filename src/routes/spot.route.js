import express from 'express';

import spotCtrl from '../controllers/spot.controller';
import spotImageCtrl from '../controllers/spotImage.controller';
import spotInformCtrl from '../controllers/spotInform.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/:spotId')
  .get(spotCtrl.get);

router.route('/:spotId/images')
  .get(spotImageCtrl.listImageBySpotId);

router.route('/:spotId/spot-inform')
  .get(spotInformCtrl.listSpotInformBySpotId);

export default router;

