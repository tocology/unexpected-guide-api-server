import express from 'express';
import artsCtrl from '../controllers/art.controller';

const router = express.Router(); // eslint-disable-line new-cap

// // GET /api/arts
// router.route('/')
//     .get(artsCtrl.index);
//
// // POST /api/arts/
// router.route('/')
//     .post(artsCtrl.create);
//
// // GET /api/arts/artist
// router.route('/artist')
//     .get(artsCtrl.showByArtist);
//
// // DELETE /api/arts/:id
// router.route('/:id')
//     .delete(artsCtrl.destroy);

/*
 arts/:soundId
 soundId connecting docent
 */

router.route('/')
  .get(artsCtrl.list);

export default router;
