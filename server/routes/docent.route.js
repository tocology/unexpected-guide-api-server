import express from 'express';
import docentCtrl from '../controllers/docent.controller';

const router = express.Router();

router.route('/')
  .get(docentCtrl.listDocent);

export default router;
