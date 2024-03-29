const express=require('express')
const app=express()
const db=require('./config/connect')
const autoRouter=require('./routes/autoRoutes')
const cors=require('cors')

db()
app.use(express.json())
app.use(cors())
app.use('/auto',autoRouter)

app.get('/',(req,res)=>{
  res.send("Welcome to Auto Rental System")
})

app.listen(5000,()=>{
  console.log('connected with the server at 5000');
})

