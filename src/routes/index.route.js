import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import artRoutes from './art.route';
import docentRoutes from './docent.route';
import voiceRoutes from './voice.route';
import purchaseRoutes from './purchase.route';
import prevoiceRoutes from './prevoice.route';
import courseRoutes from './course.route';
import countryRoutes from './country.route';
import stateRoutes from './state.route';

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
router.use('/prevoices', prevoiceRoutes);
router.use('/courses', courseRoutes);
router.use('/countries', countryRoutes);
router.use('/states', stateRoutes);

export default router;