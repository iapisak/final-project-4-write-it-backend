const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------- AUTH -------------------------- //
router.post('/login', ctrl.auth.createSession)
router.delete('/logout', ctrl.auth.deleteSession)
router.post('/signup', ctrl.auth.createUser)

// ----------------------------- Profile -------------------------- //
router.get('/profile', ctrl.profile.getProfile)
router.get('/posts/:user_Id', ctrl.profile.getAllPosts)

// ----------------------------- Channel -------------------------- //
router.get('/channel', ctrl.channel.channel)
router.put('/channel/create', ctrl.channel.createChannel)
router.delete('/channel/:channel_Id', ctrl.channel.deleteChannel)

// ----------------------------- Post -------------------------- //
router.get('/posts', ctrl.post.getAllPosts)
router.get('/posts/post_detail/:post_Id', ctrl.post.getPostDetail)
router.get('/posts/:channel_Id', ctrl.post.getPosts)
router.post('/posts/create', ctrl.post.createPost)
router.put('/posts/edit/:post_Id', ctrl.post.updatePosts)
router.delete('/posts/delete/:post_Id', ctrl.post.deletePost)

// ----------------------------- Comment -------------------------- //
router.get('/comment', ctrl.comment.getAllComments)
router.get('/comment/post/:post_Id', ctrl.comment.getCommentsByChannel)
router.put('/comment/create', ctrl.comment.createComment)
router.delete('/comment/delete/:comment_Id', ctrl.comment.deleteComment)

module.exports = router;