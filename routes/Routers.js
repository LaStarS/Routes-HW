const routers = [
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
    ]

    module.exports = routers