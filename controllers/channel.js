const db = require('../models')

const channel = (req, res) => {
    db.Channel.find( {}, (err, channels) => {
        if (err) { return res.status(500).json({ error: "Could not find any channel"}) }
        res.json({ status: 200, data: channels })
    })
}

const createChannel = (req, res) => {
    db.Channel.create(req.body, (err, createChannel) => {
        if (err) { return res.status(400).json({ error: "Could not create this channel"}) }
        res.json({ status: 200, data: createChannel })
    })
}

const deleteChannel = async (req, res) => {
    try {
        const deleteChannel = await db.Channel.findByIdAndDelete(req.params.channel_Id)
        res.json({ status: 200, data: deleteChannel })
    } catch (err) {
        return res.status(500).json({ error: "Could not find this post"})
    }
}

module.exports = {
    channel,
    createChannel,
    deleteChannel,
}