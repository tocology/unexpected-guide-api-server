import express from 'express';
import authRoutes from './auth.route';
import usersRoutes from './users.route';
import artsRoutes from './arts.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/arts', artsRoutes);

export default router;