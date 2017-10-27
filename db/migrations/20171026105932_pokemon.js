exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', (table) => {
    table.increments(); //ID add to every table you make.
   table.string('name').notNullable().defaultTo('');
   table.integer('cp').notNullable().defaultTo(0);
   table.boolean('in_gym').notNullable().defaultTo('')
   table.integer('trainer_id')
   .notNullable()
   .references('id')
   .inTable('trainers')
   .onDelete('CASCADE')
   .defaultTo('0')
   .index();
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
