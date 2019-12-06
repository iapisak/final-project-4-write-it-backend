const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema ({
    name: String,
    photo: String,
    detail: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref:'Post'
    }],
})

module.exports = mongoose.model('Channel', ChannelSchema);