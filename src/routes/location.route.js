import express from 'express';

import locationCtrl from '../controllers/location.controller';

const router = express.Router();

router.route('/:locationId')
  .get(locationCtrl.get);

export default router;
