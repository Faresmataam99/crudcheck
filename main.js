const express =require ('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/usersRoutes');

const app = express ()
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(usersRoutes)


mongoose.connect('mongodb://127.0.0.1:27017/users')


app.listen(3000, ()=> {console.log('starting server')})


