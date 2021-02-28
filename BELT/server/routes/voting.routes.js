const VotingController = require("../controllers/voting.controller");

module.exports = app => {
    app.post("/api/createQuestion", VotingController.createQuestion);
    app.put("/api/updateVote/:id", VotingController.updateQuestion);
    app.get("/api/getPolls", VotingController.getQuestions);
    app.get("/api/top3", VotingController.topThreeQuestions);
    app.get("/api/question/:id", VotingController.findOneQuestion);
    app.put("/api/getOption/:id/:oid", VotingController.updateVote);
}
