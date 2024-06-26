const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/users/:userId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)
module.exports = router;