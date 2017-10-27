exports.up = function(knex, Promise) {
  return knex.schema.createTable('trainers', (table) => {
    table.increments(); //ID add to every table you make.
    table.string('name').notNullable().defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trainers');
};
