// Require Modules
const express = require('express');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

// Create the Express App
const app = express();


// Configure the App (app.set)
app.set('view engine', 'ejs'); 

// We'll use the ejs view engine


// Mount Middleware (app.use)
app.use(express.static('css'));
app.use('/', indexRouter);
app.use('/skills', skillsRouter);




// Tell the App to Listen on Port 3000
app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});