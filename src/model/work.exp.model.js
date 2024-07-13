const mongoose = require("mongoose");

const description = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    details: { 
        type: String, 
        required: true 
    } 
  });

const ExperienceSchema = new mongoose.Schema({
    company: {
        type: String, 
        required: true 
    },
    position: {
        type: String, 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date 
    },
    description: [description],
    skills : [{
        type: String
    }]
  });


module.exports = mongoose.model("Experiences", ExperienceSchema);