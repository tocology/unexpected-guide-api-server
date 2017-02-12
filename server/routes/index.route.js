import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import artRoutes from './art.route';
import docentRoutes from './docent.route';
import voiceRoutes from './voice.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/art', artRoutes);
router.use('/docent', docentRoutes);
router.use('/voice', voiceRoutes);

export default router;