import models from '../models';

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
  }).then(coursePurchase => res.json(coursePurchase))
    .cat(e => next(e));
}

export default {
  getPurchaseByVoiceId, getPurchaseByCourseId
};