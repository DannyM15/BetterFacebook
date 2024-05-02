const { Schema, model } = require('mongoose');

// Schema to create User Model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/] // email validation
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


userSchema.virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// Initialize the User model
const User = model('User', userSchema);

module.exports = User;
