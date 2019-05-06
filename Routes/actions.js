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

 
  router.post('/', (req, res) => {
    const { project_id, description, notes} = req.body;

    if(project_id && description.length <= 255 && description.length >= 1 && notes) {
        actionsModel.createAction(req.body)
            .then(result => {
                res.status(201).json({ result });
            })
            .catch(err => {
                res.status(500).json({ errorMessage: err});
            });
    } else {
        res.status(401).json({errorMessage: err});
    }
});
  
  router.put('/:id', (req, res) => {
  
    const {id} = req.params;
    const {description, notes, completed} = req.body;
  
    actionsModel.update(id, {description, notes, completed})
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => res.status(500).json({errorMessage: err}));
  });
  
  
  router.delete('/:id', (req, res) => {
    const {id} = req.params;
    actionsModel.remove(id)
    .then(count => {
      res.status(204).end();
    })
    .catch(err => res.status(500).json({errorMessage: err}));
  });
  

module.exports = router;