exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
    })
    .createTable('species', table => {
      table.increments('species_id')
    })
    .createTable('animals', table => {
      table.increments('animal_id')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('zoos')
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
