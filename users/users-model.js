const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    postUser,
    removeUser,
  };
  
  function getUsers() {
    return db('users');
  }
  
  function postUser(newUser){
    return db('users').insert(newUser)
  }
  
  function removeUser(id) {
    return db('users')
      .where('id', id)
      .del();
  }