const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    date: Date,
    
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
        default: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80"
    },

    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref:'Channel'
    },

    userSlug: String,

});

module.exports = mongoose.model('Post', PostSchema);
