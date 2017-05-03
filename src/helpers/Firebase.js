import admin from 'firebase-admin';
import httpStatus from 'http-status';
import APIError from './APIError';
import serviceAccount from './google/api-7503496091597417729-912895-firebase-adminsdk-gs94x-4394a1c1eb.json';
import models from '../models';

function _updateUser(userRecord) {
  const { uid, displayName, photoURL } = userRecord;
  const email = userRecord.email ? userRecord.email : userRecord.providerData[0].email;

  return models.User.findOne({
    where: { uid: uid }
  }).then(user => {
    if (!user) {
      return models.Image.create({ url: photoURL }).then(image => {
        return models.User.create({
          uid: uid, userName: displayName, email: email, imageId: image.imageId
        });
      });
    } else {
      return user;
    }
  });
}

function _getUser(userRecord) {
  return models.User.findOne({
    where: { uid: userRecord.uid }
  })
}

export default class Firebase {
  static authCheck(req, res, next) {
    const { authorization } = req.headers;

    if (authorization === undefined)
      return next(new APIError('Authorization not found', httpStatus.UNAUTHORIZED, true));

    const [ header, token ] = authorization.split(' ');

    if (header !== 'Firebase')
      return next(new APIError('Firebase Authorization not found', httpStatus.UNAUTHORIZED, true));

    admin.auth().verifyIdToken(token).then((decodedToken) => {
        return admin.auth().getUser(decodedToken.uid).then(userRecord => {
            const promise = req.url === '/login' ? _updateUser : _getUser;

            return promise(userRecord).then(user => {
              req.userId = user.userId;
              return next();
            });
        }).catch(error => {
          return next(new APIError(`Can not retrieve user info using the token`, httpStatus.UNAUTHORIZED, true));
        });
      }).catch(error => {
        return next(new APIError(`Invalid Firebase Token : ${error.message}`, httpStatus.UNAUTHORIZED, true));
    });
  }

  static initialization() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
}
