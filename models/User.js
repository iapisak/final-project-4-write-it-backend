const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    name: {
        type: String,
        required:[true,'name is required']
    },

    lastName: {
        type: String,
        required:[true, 'lastname is required']
    },

    email: {
        type: String,
        required: [true,'email is required']
    },

    password: {
        type: String,
        required: [true,'password is required']
    },

    signup_date: {
        type: Date,
        default: Date.now
    },

    posts:[{
        type: Schema.Types.ObjectId,
        ref:'Post'
    }],
    
    slug: String,
})

module.exports = mongoose.model('User', UserSchema);