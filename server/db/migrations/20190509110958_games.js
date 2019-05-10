exports.up = (knex, Promise) => {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').primary()
    table.binary('frame1Img')
    table.string('frame1Map')
    table.binary('frame2Img')
    table.string('frame2Map')
    table.binary('frame3Img')
    table.string('frame3Map')
    table.binary('frame4Img')
    table.string('frame4Map')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('games')
}
