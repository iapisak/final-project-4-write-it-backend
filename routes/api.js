const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------- AUTH -------------------------- //
router.post('/login', ctrl.auth.createSession)
router.delete('/logout', ctrl.auth.deleteSession)
router.post('/signup', ctrl.auth.createUser)

// ----------------------------- Profile -------------------------- //
router.get('/profile/:user_Id', ctrl.profile.getProfile)
router.get('/profile/posts/:user_Id', ctrl.profile.getAllPosts)
router.get('/profile/comments/:user_Id', ctrl.profile.getAllComments)
router.put('/profile/edit/:user_Id', ctrl.profile.editProfie)

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
router.get('/comment/post/:post_Id', ctrl.comment.getCommentsByPost)
router.put('/comment/create', ctrl.comment.createComment)
router.delete('/comment/delete/:comment_Id', ctrl.comment.deleteComment)

module.exports = router;