// dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// router
let mainRoute = require('./routes/mainRouter');

// initialize express
const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// mongooDB
mongoose.connect('mongodb://localhost:27017/goodhood7')
.then(()=>{console.log('mongo connected')})
.catch(()=>{console.error(err)})
mongoose.Promise = global.Promise

// initialieze handlebars
const xhb = require('express-handlebars').create({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname,'/views/partials/'),
    extname: 'handlebars'
});

// setting view engine
app.engine('handlebars', xhb.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// routing
app.use('/', mainRoute);
app.use('/volunteer', mainRoute);
app.use('/contract', mainRoute);
app.use('/about', mainRoute);

// error routing

// css styling
app.use(express.static(__dirname + '/public/'));

// port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is on @ port ${port}`)
});

module.exports = app;