import express from 'express';
import Firebase from '../helpers/Firebase';
import purchaseCtrl from '../controllers/purchase.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/voices/:voiceId')
  .get(Firebase.authCheck, purchaseCtrl.getPurchaseByVoiceId);

router.route('/courses/:courseId')
  .get(Firebase.authCheck, purchaseCtrl.getPurchaseByCourseId);

router.route('/courses/:courseId')
  .post(Firebase.authCheck, purchaseCtrl.addCoursePurchase);

export default router;