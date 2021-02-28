const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const QuestionSchema = mongoose.Schema({
    text: {
        type: String,
        minlength: [10, "Question must be at least 10 characters"],
        required: [true, "A Question must have content"],
        unique: true
    },
    option1: {
            name: {type: String, default: "option_1"},
            content: {type: String, required: [true, "Must have at least 2 options"]},
            vote: {type: Number, default: 0},
        },
    option2: {
            name: {type: String, default: "option_2"},
            content: {type: String, required: [true, "Must have at least 2 options"]},
            vote: {type: Number, default: 0},
        },
    option3: {
            name: {type: String, default: "option_3"},
            content: {type: String},
            vote: {type: Number, default: 0}
        },
    option4: {
            name: {type: String, default: "option_4"},
            content: {type: String},
            vote: {type: Number, default: 0}
        }
}, 
);


module.exports = mongoose.model('Question', QuestionSchema);
