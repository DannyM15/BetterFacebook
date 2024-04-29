const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
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

module.exports = router;