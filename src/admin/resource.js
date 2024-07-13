const Admin = require("../model/admin.model");
const BasicInfo = require("../model/basic.info.model");
const Projects = require("../model/projects.model");
const Skills = require("../model/skills.model");
const Experience = require("../model/work.exp.model");


const { onlyVisible, canAdd, canEdit, canDelete, updatePassword } = require("./access");

module.exports = [
    {
        resource: Admin,
        options: {
            properties: {
                encryptedPassword: { isVisible: false },
            },
            actions: {
                new: {
                    isAccessible: canAdd,
                    before: updatePassword,
                },
                edit: {
                    isAccessible: canEdit,
                    before: updatePassword,
                },
                delete: {
                    isAccessible: canDelete,
                },
            },
        },
    },
    {
        resource: BasicInfo,
        options: {
            actions: {
                new: {
                    isAccessible: canAdd,
                },
                edit: {
                    isAccessible: canEdit,
                },
                delete: {
                    isAccessible: canDelete,
                },
            },
        },
    },
    {
        resource: Projects,
        options: {
            actions: {
                new: {
                    isAccessible: canAdd,
                },
                edit: {
                    isAccessible: canEdit,
                },
                delete: {
                    isAccessible: canDelete,
                },
            },
        },
    },
    {
        resource: Skills,
        options: {
            actions: {
                new: {
                    isAccessible: canAdd,
                },
                edit: {
                    isAccessible: canEdit,
                },
                delete: {
                    isAccessible: canDelete,
                },
            },
        },
    },
    {
        resource: Experience,
        options: {
            actions: {
                new: {
                    isAccessible: canAdd,
                },
                edit: {
                    isAccessible: canEdit,
                },
                delete: {
                    isAccessible: canDelete,
                },
            },
        },
    },
];
