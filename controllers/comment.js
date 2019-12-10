const db = require('../models')

// Get All Comments  //
const getAllComments = async (req, res) => {
    try {
        const getComments = await db.Comment.find({});
        res.json({ status: 200, data: getComments});
    } catch (err) {
        return res.status(500).json({ error: "Could not find comment" });
    }
};

// Populated Comment by post //
const getCommentsByPost = async (req, res) => {
    try {
        const getComments = await db.Comment.find({ post: req.params.post_Id}).populate("post")
        res.json({ status: 200, data: getComments});
    } catch (err) {
        return res.status(500).json({ error: "Could not find comment" });
    }
}

// Create Comment //
const createComment = async (req, res) => {
    try {
        const createComment = await db.Comment.create(req.body)
        res.json({ status: 200, data: createComment })
    } catch (err) {
        return res.status(400).json({ error: "Could not create this comment"})
    }
}

// Delete Comment //
const deleteComment = async (req, res) => {
    try {
        const deleteComment = await db.Comment.findByIdAndDelete(req.params.comment_Id)
        res.json({ status: 200, data: deleteComment })
    } catch (err) {
        return res.status(500).json({ error: "Could not find this comment"})
    }
} 

module.exports = {
    getAllComments,
    createComment,
    deleteComment,
    getCommentsByPost,
}