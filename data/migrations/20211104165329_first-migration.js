exports.up = function(knex) {
  return knex.schema
    .createTable('zoos')
    .createTable('species')
    .createTable('')
    .createTable('')
};

exports.down = function(knex) {

};
