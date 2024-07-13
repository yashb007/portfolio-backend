const BasicInfo = require('../model/basic.info.model');
const Projects = require('../model/projects.model');
const Skills = require('../model/skills.model');
const Experiences = require('../model/work.exp.model');
const { sesClient, SendTemplatedEmailCommand } = require('../aws/ses')



const findBasicInfo = async () =>{
    try {
        const response = await BasicInfo.findOne();
        if(!response || Object.keys(response).length==0){
            return {
                status : false,
                msg : 'No details found'
            };
        }
        return {
            status : true,
            info : response
        };
    } catch (error) {
        console.log(error);
    }
}


const findAllSkills = async () =>{
    try {
        const response = await Skills.find();
        if(response.length==0){
            return {
                status : false,
                msg : 'No Skills found'
            };
        }
        return {
            status : true,
            info : response
        };
    } catch (error) {
        console.log(error);
    }
}


const findAllProjects = async () =>{
    try {
        const response = await Projects.find();
        if(response.length==0){
            return {
                status : false,
                msg : 'No Skills found'
            };
        }
        return {
            status : true,
            info : response
        };
    } catch (error) {
        console.log(error);
    }
}


const findAllExperience = async () =>{
    try {
        const response = await Experiences.find();
        if(response.length==0){
            return {
                status : false,
                msg : 'No Experience found'
            };
        }
        return {
            status : true,
            info : response
        };
    } catch (error) {
        console.log(error);
    }
}

const sendContactEmail = async (name , email , message) =>{
    try {
        const params = {
            Source: 'yashbansal4163@gmail.com',
            Destination: {
              ToAddresses: ['yashbansal9991@gmail.com']
            },
            Template: 'contact-template',
            TemplateData: JSON.stringify({
                name : name,
                email : email,
                message : message
              }),
          };
          console.log(params)
            const data = await sesClient.send(new SendTemplatedEmailCommand(params));
            return ({ status :true, message: 'Email sent successfully!', data});
    } catch (error) {
        console.log(error);
        return ({ status :false, message: 'Email not sent'})
    }
}

module.exports = {
    findBasicInfo,
    findAllSkills,
    findAllProjects,
    findAllExperience,
    sendContactEmail
}
