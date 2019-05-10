exports.up = (knex, Promise) => {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').primary()
    table.binary('frame1Img')
    table.string('frame1Map')
    table.string('frame2Img')
    table.string('frame2Map')
    table.string('frame3Img')
    table.string('frame3Map')
    table.string('frame4Img')
    table.string('frame4Map')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('games')
}
