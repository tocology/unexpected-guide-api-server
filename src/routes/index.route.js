import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import artRoutes from './art.route';
import docentRoutes from './docent.route';
import voiceRoutes from './voice.route';
import purchaseRoutes from './purchase.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/arts', artRoutes);
router.use('/docents', docentRoutes);
router.use('/voices', voiceRoutes);
router.use('/purchases', purchaseRoutes);

export default router;