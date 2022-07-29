const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb+srv://NicolasJimenez:1324354657@cluster0.tp8iffe.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

// Setting
app.set('port' , process.env.PORT || 8080)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())   // si recibimos json el nav puede entenderlo

// Router
app.use('/api/tasks' ,require('./routes/tasks'))

// Static Files
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(app.get('port') , () => {
    console.log('Server on port', app.get('port'));
})