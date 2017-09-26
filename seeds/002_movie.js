
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'Jurassic Park', year: 1993, director_id:1},
        {id: 2, title: 'Pulp Fiction', year: 1992, director_id:2},
        {id: 3, title: 'Titanic', year: 1997, director_id:3}
      ]);
    });
};
