import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import artRoutes from './art.route';
import docentRoutes from './docent.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/art', artRoutes);
router.use('/docent', docentRoutes);

export default router;