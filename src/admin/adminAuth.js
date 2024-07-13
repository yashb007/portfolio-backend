const bcrypt = require("bcryptjs");
const Admin = require("../model/admin.model");
const authenticate = async (email, password) => {
    const admin = await Admin.findOne({ email });
    if (admin) {
        const isMatch = await bcrypt.compare(password, admin.encryptedPassword);
        if (isMatch) {
            return admin;
        }
    }
    return false;
};

module.exports = authenticate;
