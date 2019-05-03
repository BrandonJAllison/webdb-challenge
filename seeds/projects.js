exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'First Project',
      description:
        'First Project description'
    },
  ]);
};
