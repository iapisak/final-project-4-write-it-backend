const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    
    comment: {
        type: String,
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }

})

module.exports = mongoose.model('Comment', CommentSchema)