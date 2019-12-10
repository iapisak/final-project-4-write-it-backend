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

    photo: {
        type: String,
        default: "https://www.landscapeto.ca/wp-content/uploads/2019/03/user.png"
    },

    theme: {
        type: String,
        default: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80"
    },

    posts:[{
        type: Schema.Types.ObjectId,
        ref:'Post'
    }],
    
    slug: String,
})

module.exports = mongoose.model('User', UserSchema);