const bcrypt = require("bcryptjs");
const onlyVisible = {
    new: {
        isAccessible: false,
    },
    edit: {
        isAccessible: false,
    },
    delete: {
        isAccessible: false,
    },
};

const canEdit = ({ currentAdmin, record }) => {
    return currentAdmin && currentAdmin.role === "admin";
};

const canDelete = ({ currentAdmin, record }) => {
    return currentAdmin && currentAdmin.role === "admin";
};

const canAdd = ({ currentAdmin, record }) => {
    return currentAdmin && currentAdmin.role === "admin";
};

const updatePassword = async (request) => {
    if (request.payload.password) {
        let hash = await bcrypt.hash(request.payload.password, 10);
        request.payload = {
            ...request.payload,
            encryptedPassword: hash,
            password: undefined,
        };
    }
    return request;
};
module.exports = {
    onlyVisible,
    canEdit,
    canDelete,
    canAdd,
    updatePassword
};
