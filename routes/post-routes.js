const express = require('express')
const { updatePost, deletePost, getAllPosts, getPostById, createPost  } = require('../controllers/post-controller')

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.patch('/:id', updatePost);

module.exports = router