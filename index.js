const express = require ('express')
const  mongoose = require('mongoose')
const app = express()
const cors = require('cors')
mongoose.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected db')
}).catch((error) => {
    console.log('Error connecting to tkkmsshe database:', error);
 });

 app.use(cors({
    origin  : 'http://localhost:3000/'
 }))

app.get('/',(req,res)=>{
    res.send('hello world')
})

const UserModel = require('./models/Users')

app.get('/users', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.header('Access-Control-Allow-Origin', 'https://project-1-rcf8.onrender.com/'); // تعيين النطاق الذي يُسمح له بالوصول
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen (3000,()=>{
    console.log('hello world');
})

