const { Poll } = require("../models");



const pollController = {
  async createPoll(req, res) {              
    const {          
      title,
      question,
      choice_a,
      choice_b,
      user_id
    } = req.body;
        
    if (!title || !question || !choice_a || !choice_b) {
      res.render("index", {
        errorMessage: "Please fill all the fields before submitting"
      });
      return;
    }    

    await Poll.create({
      title: title,
      question: question,
      choice_a: choice_a,
      choice_b: choice_b,
      user_id: user_id,
      result_a: 0,
      result_b: 0,

    }),          
    res.redirect("/");
  }
}

module.exports = pollController;