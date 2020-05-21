const express = require('express');
const router = express.Router();
const db = require('./users-model');

router.post('/', (req, res) => {
    let newUser = req.body
  db.postUser(newUser)
  .then(post => {
        res.status(201).json(post)
  }).catch(error=>{
      console.log(error)
      res.status(500).json({errormessage: 'error posting'})
  })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.removeUser(id)
    .then(res.status(200).json({message: 'User was deleted!'}))
    .catch(res => {
        res.status(500).json({errormessage: 'error retrieving data'})
    })
  });

router.get('/', (req, res) => {
  db.getUsers()
  .then(users => {
    res.status(200).json({users: users})
  })
  .catch(error => {
    res.status(500).json({message: "could not retrieve user data"})
  })
});

module.exports = router;