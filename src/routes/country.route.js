import express from 'express';

import countryCtrl from '../controllers/country.controller';

const router = express.Router();

router.route('/')
  .get(countryCtrl.list)

export default router;