const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.use(express.json());


router
    .route("/info")
    .get(controller.getBasicInfo);

router
    .route("/skills")
    .get(controller.getAllSkills);


router
    .route("/projects")
    .get(controller.getAllProjects);
    

router
    .route("/experience")
    .get(controller.getAllExperience);


router
    .route("/contact")
    .post(controller.sendContactDetails);    

module.exports = router;
