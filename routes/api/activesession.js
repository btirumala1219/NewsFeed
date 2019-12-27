const express = require('express');
const router = express.Router();

const ActiveSession = require('../../models/ActiveSession');


router.post('/newactivesession', (req, res) => {
  let activesession = new ActiveSession(req.body);
  activesession.save(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else{
      res.send("success");
    }
  })
});

router.get('/getactivesession', (req, res) => {
    ActiveSession.find()
  .then(ActiveSessions => res.send(ActiveSessions))
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