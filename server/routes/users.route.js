import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import usersCtrl from '../controllers/users.controller';
import config from '../../config/env';

const router = express.Router(); // eslint-disable-line new-cap

// POST /api/users
router.route('/')
    .post(validate(paramValidation.createUser), usersCtrl.create);

// GET /api/users/:username
router.route('/:username')
    .get(expressJwt({ secret: config.jwtSecret }), usersCtrl.show);

export default router;
