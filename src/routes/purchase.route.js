import express from 'express';
import Firebase from '../helpers/Firebase';
import purchaseCtrl from '../controllers/purchase.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/voices/:voiceId')
  .get(Firebase.authCheck, purchaseCtrl.getPurchaseByVoiceId);

export default router;