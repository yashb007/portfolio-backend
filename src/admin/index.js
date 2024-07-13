const AdminBro = require("admin-bro");
const { ACTIONS } = require("admin-bro");
const locale = require("./locale");
const resources = require("./resource");


// create an instance of AdminBro
const adminBro = new AdminBro({
    // databases: [db],
    rootPath: "/admin",
    locale,
    resources,
    branding: {
        companyName: "My Profile App",
        softwareBrothers: false,
    },
});

module.exports = adminBro;
