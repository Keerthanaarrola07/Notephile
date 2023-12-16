const express = require('express')
const app = express()
const path=require('path')
const cookieParser = require('cookie-parser');

app.use(express.json()); // parse JSON bodies
app.use(cookieParser());

const user = require('./server/routes/user')
const notes = require('./server/routes/notes')


//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
  });

  app.use(express.static(__dirname + "/public"))
  app.get('/', (req,res)=>{
    const userIdCookie = req.cookies.userId;
    if (userIdCookie) {
        return res.redirect('/notes');
    }
   return res.redirect("/login")
  });
  app.get('/login', (req,res)=>{
    const userIdCookie = req.cookies.userId;
    if (userIdCookie) {
        return res.redirect('/notes');
    }
    res.sendFile(path.join(__dirname + "/public/login.html"))
  });
  app.get('/register', (req,res)=>{
    const userIdCookie = req.cookies.userId;

    if (userIdCookie) {
        return res.redirect('/notes');
    }
    res.sendFile(path.join(__dirname + "/public/register.html"))
  });
  app.get('/notes', (req,res)=>{
    const userIdCookie = req.cookies.userId;

    if (!userIdCookie) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname + "/public/notes.html"))
  });
  app.get('/logout', (req,res)=>{
    res.clearCookie('userId');
    return res.redirect("/login")
  })


  app.use('/users', user)
// app.use for routes above
  app.use('/notes', notes)
// app.use for routes above

app.get('*', (req, res) => {
  return res.redirect("/login")
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))