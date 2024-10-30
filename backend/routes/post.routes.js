const express = require('express');
const { setPosts, getPosts, editPosts, deletePosts, toggleLikePost } = require('../controllers/post.controller');

const router = express.Router();

router.get('/', getPosts);

router.post('/', setPosts);

router.put('/:id', editPosts);

router.delete('/:id', deletePosts);

router.patch("/toggle-like/:id", toggleLikePost);

module.exports = router;