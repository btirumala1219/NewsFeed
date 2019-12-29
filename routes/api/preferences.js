const express = require('express');
const router = express.Router();

const Preferences = require('../../models/Preferences');


router.post('/newPref', (req, res) => {
  let preferences = new Preferences(req.body);
  preferences.save(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else{
      res.send("success");
    }
  })
});

router.get('/getPrefs', (req, res) => {
  Preferences.find()
  .then(Preferences => res.send(Preferences))
  .catch(err => res.status(404).json({ nofound: 'No found' }));
});

router.put('/:id', (req, res) => {
	ActiveSession.findByIdAndUpdate(req.params.id, req.body)
	.then(book => res.json({ msg: 'Updated successfully' }))
	.catch(err =>
		res.status(400).json({ error: 'Unable to update the Database' })
	);
});

module.exports = router;