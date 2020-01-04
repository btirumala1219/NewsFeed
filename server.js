const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
bodyParser = require('body-parser');
// routes
const user = require('./routes/api/user');
const activesession = require('./routes/api/activesession');
const preferences = require('./routes/api/preferences');

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "/build/")));

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());

// use Routes
app.use('/api/user', user);
app.use('/api/activesession', activesession);
app.use('/api/preferences', preferences);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
