import express from 'express';
import voiceCtrl from '../controllers/voice.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/art/:artId')
  .get(voiceCtrl.listByArtId);

export default router;