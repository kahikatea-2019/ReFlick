exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('games').del()
      .then(() => {
        // Inserts seed entries
        return knex('games').insert([
          { id: 1, frame1Img: 'r1c2', frame1Map: 'r1c3', frame2Img: 'r1c4', frame2Map: 'r1c5', frame3Img: 'r1c6', frame3Map: 'r1c7', frame4Img: 'r1c8', frame4Map: 'r1c9' }
  
        ])
      })
  }