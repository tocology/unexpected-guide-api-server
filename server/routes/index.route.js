import express from 'express';
import authRoutes from './auth.route';
import usersRoutes from './users.route';
import artsRoutes from './arts.route';
import docentRoutes from './docent.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/arts', artsRoutes);
router.use('/docents', docentRoutes);

export default router;