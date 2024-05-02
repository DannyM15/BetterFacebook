const { Schema, model } = require('mongoose');
// Thought model with the properties listed in the README
// Reaction Schema is first since the Reaction Schema is called in the Thought Schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now

    }
});
// Thought Schema with Reaction Array
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [{
        reactionSchema
    }]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
