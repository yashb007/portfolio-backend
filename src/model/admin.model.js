const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * Admin Schema
 * @private
 */
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
    },
    encryptedPassword: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
    },
});
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
adminSchema.pre("save", async function save(next) {
    try {
        if (!this.isModified("encryptedPassword")) return next();

        const hash = await bcrypt.hash(this.encryptedPassword, 10);
        this.encryptedPassword = hash;

        return next();
    } catch (error) {
        return next(error);
    }
});

/**
 * Statics
 */
adminSchema.statics = {
    async checkIfUserExistsByEmail({ email, encryptedPassword }) {
        if (!email) throw ({ message: "An email is required to generate a token" });
        try {
            const user = await this.findOne({ email, encryptedPassword }).exec();
            if (user) {
                return user;
            }
            return false;
        } catch (error) {
            throw error;
        }
    },
};

/**
 * @typedef Admin
 */
module.exports = mongoose.model("Admin", adminSchema);
