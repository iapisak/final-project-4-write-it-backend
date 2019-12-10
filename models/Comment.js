const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({

    date: Date,
    
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
    },
    
    userSlug: String,

})

module.exports = mongoose.model('Comment', CommentSchema)