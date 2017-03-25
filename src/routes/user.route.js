import express from 'express';
// import validate from 'express-validation';
// import expressJwt from 'express-jwt';
// import paramValidation from '../../config/param-validation';
import userCtrl from '../controllers/user.controller';
// import config from '../../config/env';

const router = express.Router(); // eslint-disable-line new-cap

// POST /api/users
// router.route('/')
//   .post(validate(paramValidation.createUser), usersCtrl.create);

// GET /api/users/:username
// router.route('/:username')
//   .get(expressJwt({ secret: config.jwtSecret }), usersCtrl.show);

router.route('/:userId')
  .get(userCtrl.get)

// router.route('/uid/:uid')
//   .get(userCtrl.getByUid)

export default router;
