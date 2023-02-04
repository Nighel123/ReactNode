const express = require('express')
const app = express()

app.get("/api",(req,res) => {
	res.json({ "users":["userOne","userTwo","userThree"] })
})

app.listen(5050,()=> {
	console.log("Server started on port 5050. Visit http://localhost:5050/api") 
})
