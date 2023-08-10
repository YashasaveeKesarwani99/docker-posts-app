const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config();


const postRouter = require('./routes/post-routes')

const app = express();

app.use(bodyParser.json())

const db = mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("successfully connected to DB!"))
    .catch(err=>console.log(err))


const PORT = process.env.PORT ?? 8000

app.get('/', (request, response) => {
    response.send('running and thriving!!!')
})

app.use('/api/v1/posts', postRouter);

app.listen(PORT, ()=>{
    console.log(`app runnnig on port ${PORT}`)
})