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

export default {
  getPurchaseByVoiceId
};