const db = require ('../models')

const getProfile = async (req, res) => {
    try {
        const foundProfile = await db.User.findById(req.params.user_Id)
        res.json ({ status: 200, data: foundProfile })
    } catch (err) {
        return res.status(400).json({ error: "Could not find this user"})
    }
}

const getAllPosts = async (req, res) => {
    try {
        const getPosts = await db.Post.find({ user: req.params.user_Id}).populate("user")
        res.json ({ status: 200, data: getPosts})
    } catch (err) {
        return res.status(400).json({ error: "Could not get Posts"})
    }
}

const editProfie = async (req, res) => {
    try {
        const profile = await db.User.findByIdAndUpdate(req.params.user_Id, req.body, { new: true })
        res.json({ status: 200, data: profile })
    } catch (err) {
        return res.status(500).json({ error: "Could not update it"})
    }
}

module.exports = {
    getProfile,
    getAllPosts,
    editProfie,
}
