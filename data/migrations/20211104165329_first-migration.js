exports.up = function (knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 128).notNullable()
      table.string('address', 128).notNullable().unique()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 128).notNullable().unique()
    })
    .createTable('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 128).notNullable()
      table.integer('species_id')
        .unsigned()
        .notNullable()
        .references('species_id')
        .inTable('species')
        .onDelete('RESTRICT') // should deleting a species cause animals of that species to be deleted?
        .onUpdate('RESTRICT')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
      table.integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('zoo_id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

      table.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('animal_id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
