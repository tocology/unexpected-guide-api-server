import express from 'express';
import Firebase from '../helpers/Firebase';
import authCtrl from '../controllers/auth.controller';

const router = express.Router(); // eslint-disable-line new-cap

// /** POST /api/auth/login - Returns token if correct username and password is provided */
// router.route('/login')
//     .post(validate(paramValidation.login), authCtrl.login);
router.route('/login')
  .get(Firebase.authCheck, authCtrl.login)

// /** GET /api/auth/random-number - Protected route,
//  * needs token returned by the above as header. Authorization: Bearer {token} */
// router.route('/random-number')
//     .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

export default router;