exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(actions) {
      actions.increments()
      actions.string('description', 255).notNullable();
      actions.text('notes').notNullable();
      actions.boolean('complete').defaultTo(false);

      actions.integer('project_id').unsigned().notNullable()
      .references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  
};
