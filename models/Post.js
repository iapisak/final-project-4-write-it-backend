const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required:true,
    },

    content: {
        type: String,
        required: true,
    },

    photo: {
        type: String,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref:'Channel'
    },
});

module.exports = mongoose.model('Post', PostSchema);
