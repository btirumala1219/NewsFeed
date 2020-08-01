const express = require('express');
var cors = require('cors');
bodyParser = require('body-parser');
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "/build/")));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build//index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
