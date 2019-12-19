const express = require('express');
const router = express.Router();

const User = require('../../models/User');


router.post('/newuser', (req, res) => {
  let user = new User(req.body);
  user.save(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else{
      res.send("success");
    }
  })
});

router.get('/User', (req, res) => {
  User.find()
  .then(Users => res.send(Users))
  .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

module.exports = router;