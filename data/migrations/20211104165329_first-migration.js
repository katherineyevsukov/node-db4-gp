exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments() // id
    })
    .createTable('species', table => {
      table.increments() // id
    })
    .createTable('animals', table => {
      table.increments() // id
    })
    .createTable('zoo_animals', table => {
      table.increments() // id
    })
};

exports.down = function(knex) {

};
