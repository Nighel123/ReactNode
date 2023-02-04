require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.get("/api",(req,res) => {
	res.json({ "users":["userOne","userTwo","userThree"] })
})

app.listen(5050,()=> {
	console.log("Server started on port 5050. Visit http://localhost:5050/api") 
})
