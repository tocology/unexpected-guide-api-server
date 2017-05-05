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

function listCoursePurchase (req, res, next) {
  const { userId } = req;
  const { expired } = req.query;

  models.CoursePurchase.findAll({
    where: {
      $and: {
        userId: userId
      }
    }
  }).then(coursePurchases => {
    if(!coursePurchases) {
      res.json(coursePurchases);
    }

    const result = coursePurchases.filter(coursePurchase => _isCoursePurchaseExpired(coursePurchase, (expired === 'true')));

    res.json(result);
  }).catch(e => next(e));
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
    // not purchased
    if(!coursePurchase) {
      throw new APIError('Payment needed', httpStatus.PAYMENT_REQUIRED);
    }

    // payment expired (1 day left after first play)
    if(_isCoursePurchaseExpired(coursePurchase, true)) {
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

function _isCoursePurchaseExpired(coursePurchase = null, isExpired = true) {
  const playStartedAt = coursePurchase.getDataValue('playStartedAt');

  return playStartedAt && moment(playStartedAt).isAfter(moment().utc().add(1, 'day')) ? isExpired : !isExpired;
}

export default {
  getPurchaseByVoiceId, getPurchaseByCourseId, addCoursePurchase, listCoursePurchase
};