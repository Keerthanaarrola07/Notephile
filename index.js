const express = require('express')
const app = express()

app.use(express.json()); // parse JSON bodies
const user = require('./server/routes/user')
const notes = require('./server/routes/notes')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
  });

  app.use('/users', user)
// app.use for routes above
  app.use('/notes', notes)
// app.use for routes above

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))