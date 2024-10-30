const express = require('express');
const { setPosts, getPosts, editPosts, deletePosts } = require('../controllers/post.controller');

const router = express.Router();

router.get('/', getPosts);

router.post('/', setPosts);

router.put('/:id', editPosts);

router.delete('/:id', deletePosts);

router.patch("toggle-like-post/:id", (req, res) => {
    res.json({message: "Like du post " + req.params.id});
});

module.exports = router;