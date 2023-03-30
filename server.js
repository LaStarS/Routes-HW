const express = require('express')
const app = express()

const PORT = 8082


app.get('/', (req, res) => {
  res.send('<h1>My name is LaStar</h1>')
  }),

  app.get('/home', (req, res) => {
    res.send('<h2>I live in the Bronx, NY</h2>')
  }),

  app.get('/about', (req, res) => {
    res.send('<h1>Software engineering is kicking my booty.</h1>')
  }),

  app.get('/movie', (req, res) => {
    res.send('<h2>My favorite movies are Coming to America, Harlem Nights and Home Alone 2.</h2>')
  }),

  app.get('/music', (req, res) => {
    res.send('I love music in general. I have yet to hear a genre that i dont like.')
  }),

  app.get('/food', (req, res) => {
    res.send('Food is life')
  }),

  app.get('/drink', (req, res) => {
    res.send('Do not drink in excess!!')
  }),

  app.get('/kid', (req, res) => {
    res.send('I am a parent')
  }),

  app.get('/color', (req, res) => {
    res.send('Colors are beautiful!')
  }),

  app.get('/hope', (req, res) => {
    res.send('Never lose hope!!')
  }),

  app.get('/love', (req, res) => {
    res.send('I have love for all of you!!!')
  })


  app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})


// const plants = ['Monstera Delicioso', 'Corspe flower', 'Elephant-Foot Yam', 'Witches\' Butter'];

// app.get('/awesome', (req, res) => {
//     console.log('/awesome')
//     res.send('<h1>Plants are awesome!</h1><img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg">');
// });

// app.get('howdy/:first', (req, res) => {
//     console.log(req.params)
//     console.log(req.query)
//     res.send()
// })

// app.get('/hello/:first/:last', (req, res) => {
//     console.log(req.params)
//     res.send('Hello ' + req.params.first + '' + req.params.last)
// })

// app.get('/:index', (req, res) => {
//     console.log('/:index')
//     res.send(plants[req.params.index]);
//  })