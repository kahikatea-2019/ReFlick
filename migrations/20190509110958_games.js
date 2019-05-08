exports.up = function (knex, Promise) {
  return knex.schema.createTable('games', function (table) {
    table.increments('id').primary()
    table.string('frame1Img')
    table.string('frame1Map')
    table.string('frame2Img')
    table.string('frame2Map')
    table.string('frame3Img')
    table.string('frame1Map')
    table.string('frame4Img')
    table.string('frame4Map')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('games')
}
