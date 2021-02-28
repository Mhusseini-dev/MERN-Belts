const Question = require('../models/voting.model');

module.exports.createQuestion = (req, res) => {
    Question.create(req.body)
        .then(question => res.json(question))
        .catch(err => res.status(400).json(err));
}

module.exports.updateQuestion = (req, res) => {
    Question.findOneAndUpdate({_id: req.params.id}, {$set: {option: {vote: vote + 1}}}, {new: true, runValidators: true})
        .then(updatedOption => res.json(updatedOption))
        .catch(err => res.status(400).json(err));
}

module.exports.getQuestions = (req, res) => {
    Question.find().sort('-createdAt')
        .then(questions => res.json(questions))
        .catch(err => console.log(err));
}

module.exports.topThreeQuestions = (req, res) => {
    Question.find().sort({option1: 1, option2: 1, option3: 1, option4: 1}).limit(3)
        .then(questions => res.json(questions))
        .catch(err => console.log(err));
}

module.exports.findOneQuestion = (req, res) => {
    Question.find({_id: req.params.id})
        .then(question => res.json(question))
        .catch(err => console.log(err));
}

module.exports.updateVote = (req, res) => {
    if(req.params.oid === "option_1"){
        Question.findOneAndUpdate({_id: req.params.id},  {$inc: {"option1.vote": 1}}, {new:true})
        .then(question => res.json(question))
        .catch(err => console.log(err))
    }
    if(req.params.oid === "option_2"){
        Question.findOneAndUpdate({_id: req.params.id}, {$inc: {"option2.vote": 1}}, {new:true})
        .then(question => res.json(question))
        .catch(err => console.log(err))
    }
    if(req.params.oid === "option_3"){
        Question.findOneAndUpdate({_id: req.params.id}, {$inc: {"option3.vote": 1}}, {new:true})
        .then(question => res.json(question))
        .catch(err => console.log(err))
    }
    if(req.params.oid === "option_4"){
        Question.findOneAndUpdate({_id: req.params.id}, {$inc: {"option4.vote": 1}}, {new:true})
        .then(question => res.json(question))
        .catch(err => console.log(err))
    }
}
