const express = require("express");

const Router = express.Router();
const experienceController = require("../controllers/experience");

// update experience
Router.patch("/:id", experienceController.updateJobSeekerExperience);
Router.post("/", experienceController.createJobSeekerExperience);
Router.get("/:id", experienceController.getJobSeekerExperienceById);
Router.delete("/:id", experienceController.removeExperience);

module.exports = Router;
