const { Poll } = require("../models");



const pollController = {
  async createPoll(req, res) {
    const {
      tag_id,
      question,
      choice_a,
      choice_b,
      user_id
    } = req.body;

    if (!question || !choice_a || !choice_b) {
      res.render("index", {
        errorMessage: "Please fill all the fields before submitting"
      });
      return;
    }

    await Poll.create({
      tag_id: tag_id,
      question: question,
      choice_a: choice_a,
      choice_b: choice_b,
      user_id: user_id,
      result_a: 0,
      result_b: 0,

    }),
    res.redirect("/");
  }

};



module.exports = pollController;