
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'jesus1', password: "123"},
        {id: 2, username: 'jesus2', password: "123"},
        {id: 3, username: 'jesus3', password: "123"}
      ]);
    });
};
