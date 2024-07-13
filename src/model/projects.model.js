const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
         type: String, 
         required: true 
    },
    description: { 
        type: String,
        required: true 
    },
    url: { 
        type: String,
        required: true 
    },
    technologies: [{ 
            type: String, 
            required: true 
        }],
    image_url:{
        type : String
    }    
  });


module.exports = mongoose.model("Projects", ProjectSchema);