const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: {
      type: String, 
      required: true 
    },
    level: { 
        type: String,
        enum:['Beginner', 'Intermediate', 'Advanced'],
        required: true 
    },
    score:{
        type: Number, 
        required: true 
    }
  });


module.exports = mongoose.model("Skills", SkillSchema);