const express = require("express");

const Router = express.Router();
const skillController = require("../controllers/skill");

Router.get("/:id_jobseeker", skillController.getJobSeekerSkill);
Router.patch("/:id_jobseeker", skillController.updateJobSeekerSkill);

module.exports = Router;
