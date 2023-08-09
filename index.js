const express = require('express')
const mongoose = require('mongoose')

const postRouter = require('./routes/post-routes')

const app = express();

mongoose.connect('mongodb://docker-practice-mongo-1:27017/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("successfully connected to DB!"))
    .catch(err=>console.log(err))

const PORT = process.env.PORT ?? 8000

app.get('/', (request, response) => {
    response.send('running and thriving!!!')
})

app.use('/posts', postRouter);

app.listen(PORT, ()=>{
    console.log(`app runnnig on port ${PORT}`)
})