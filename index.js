const express = require ('express')
const  mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected db')
}).catch((error) => {
    console.log('Error connecting to tkkmsshe database:', error);
 });


app.get('/',(req,res)=>{
    res.send('hello world')
})

const UserModel = require('./models/Users')

app.get('/Users' , async(req,res)=>{
   const User = await UserModel.find()
   res.json(User)
})


app.listen (3000,()=>{
    console.log('hello world');
})

