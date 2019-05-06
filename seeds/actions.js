exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Action',
      notes:
        'Action notes',
    },
    {
      project_id: 1,
      description: 'Action',
      notes: 'Action notes',
    },
    {
      project_id: 1,
      description: 'Action',
      notes: 'More action notes',
    },
  ]);
};
