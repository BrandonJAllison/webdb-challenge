const express = require('express');
const actionsModel = require('../data/helpers/actionsHelpers.js');

const router = express.Router();


router.get('/', (req, res) => {
    actionsModel.getAction()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => res.status(500).json({errorMessage: err}));
  });

router.post('/:id', (req, res) => {

  const {id: project_id} = req.params;
  const {description, notes} = req.body;
  actionsModel.createAction({project_id, description, notes})
  .then(action => {
    res.status(201).json(action);
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

module.exports = router;