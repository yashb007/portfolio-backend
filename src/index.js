// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const portfolioRoutes = require('./routes/index');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Use portfolio routes
app.use('/api/portfolio', portfolioRoutes);

// Set the port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://bansaly37:5JoakhTPjPCDMDAD@cluster0.xeyy52z.mongodb.net/my-profile-app?retryWrites=false').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const authenticate = require("./admin/adminAuth");
var Store = require("express-session").Store;
var MongooseStore = require("mongoose-express-session")(Store);
const { buildAuthenticatedRouter } = require("./admin/plugin");
const formidableMiddleware = require("express-formidable");

AdminBro.registerAdapter(AdminBroMongoose);


const adminBro = require("./admin");
app.use(formidableMiddleware({}));

const router = buildAuthenticatedRouter(adminBro, {
    authenticate,
    cookiePassword: 'cookie',
    sessionOptions: {
        path: "/admin",
        secret: 'secret',
        store: new MongooseStore({
            connection: 'mongodb+srv://bansaly37:5JoakhTPjPCDMDAD@cluster0.xeyy52z.mongodb.net/my-profile-app?retryWrites=false',
            mongoose: require("mongoose"),
        }),
    },
});

app.use(adminBro.options.rootPath, router);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
