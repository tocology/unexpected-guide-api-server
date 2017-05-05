import moment from 'moment';
import httpStatus from 'http-status';

import models from '../models';
import APIError from '../helpers/APIError';

function getPurchaseByVoiceId (req, res, next) {
  const { userId } = req;
  const { voiceId } = req.params;

  models.VoicePurchase.findOne({
    where: {
      $and: {
        userId: userId,
        voiceId: voiceId
      }
    }
  }).then(voicePurchase => res.json(voicePurchase))
    .catch(e => next(e));
}

function getPurchaseByCourseId (req, res, next) {
  const { userId } = req;
  const { courseId } = req.params;

  models.CoursePurchase.findOne({
    where: {
      $and: {
        userId: userId,
        courseId: courseId
      }
    }
  }).then(coursePurchase => {
    const playStartedAt = coursePurchase.getDataValue('playStartedAt');

    if(playStartedAt && moment(playStartedAt).isAfter(moment().utc().add(1, 'day'))) {
      throw new APIError('Payment Expired', httpStatus.PAYMENT_REQUIRED, true);
    }

    res.json(coursePurchase);
  })
    .catch(e => next(e));
}

function addCoursePurchase (req, res, next) {
  const { userId } = req;
  const { courseId } = req.params;

  models.CoursePurchase.build({
    'userId': userId,
    'courseId': courseId
  }).save().then(coursePurchase => {
    res.json(coursePurchase);
  }).catch(e => next(e));
}

export default {
  getPurchaseByVoiceId, getPurchaseByCourseId, addCoursePurchase
};