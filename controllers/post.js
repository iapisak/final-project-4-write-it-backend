const db = require('../models')

const createPost = async (req, res) => {
    try {
        const createPost = await db.Post.create(req.body)
        res.json({ status: 200, data: createPost })
    } catch (err) {
        return res.status(400).json({ error: "Could not create this post"})
    }
}

// Get All Posts //
const getAllPosts = async (req, res) => {
    try {
        const foundPosts = await db.Post.find({});
        res.json({ status: 200, data: foundPosts});
    } catch (err) {
        return res.status(500).json({ error: "Could not find posts" });
    }
};

// Get 1 postDetail //
const getPostDetail = async (req, res) => {
    try {
        const foundPosts = await db.Post.findById(req.params.post_Id).populate("channel");
        res.json({ status: 200, data: foundPosts});
    } catch (err) {
        return res.status(500).json({ error: "Could not find posts" });
    }
};

// Get All Post with Specific channels //
const getPosts = async (req, res) => {
    try {
        const foundPosts = await db.Post.find({ channel: req.params.channel_Id }).populate("channel");
        res.json({ status: 200, data: foundPosts });
    } catch (err) {
        return res.status(500).json({ error: "Could not find posts" });
    }
}

// Update Post //
const updatePosts = async (req, res) => {
    console.log(req.body)
    try {
        const updatePosts = await db.Post.findByIdAndUpdate(req.params.post_Id, req.body, {new: true})
        res.json({ status: 200, data: updatePosts})
    } catch (err) {
        return res.status(500).json({ error: "Could not update it"})
    }
}

// Delete Post //
const deletePost = async (req, res) => {
    try {
        const deletePost = await db.Post.findByIdAndDelete(req.params.post_Id)
        const deleteComment = await db.Comment.find({ post: req.params.post_Id }).populate("post")
        res.json({ status: 200, post: deletePost, comment: deleteComment })
    } catch (err) {
        return res.status(500).json({ error: "Could not find this post"})
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostDetail,
    getPosts,
    updatePosts,
    deletePost
}