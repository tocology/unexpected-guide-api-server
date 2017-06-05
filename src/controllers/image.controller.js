import models from '../models';

function get (req, res, next) {
  const { imageId } = req.params;

  models.Image.findOne({
    where: {
      'imageId': imageId
    }
  }).then(image => res.json(image))
    .catch(e => next(e));
}

export default {
  get
}