import express from 'express'
import dotenv from 'dotenv'



const app = express();
app.use(express.json)
dotenv.config();



const port = process.env.PORT || 8090;


app.get('/', (req,res) => {
    res.send("hello world 123")
})

app.listen(port, (req,res) => {
    console.log(`Server is running at ${port}`)
})