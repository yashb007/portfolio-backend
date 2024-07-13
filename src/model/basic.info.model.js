const mongoose = require("mongoose");

const basicInfoSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            index: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            index: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            index: true,
        },
        bio: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            index: true,
        },
        institution: {
             type: String, 
             required: true 
        },
        degree: { 
            type: String, 
            required: true 
        },
        fieldOfStudy: { 
            type: String, 
            required: true 
        },        
    }
);


module.exports = mongoose.model("BasicInfo", basicInfoSchema);