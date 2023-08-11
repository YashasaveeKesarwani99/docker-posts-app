const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('ioredis');
const RedisStore = require('connect-redis').default;
require('dotenv').config();
const postRouter = require('./routes/post-routes');
const userRouter = require('./routes/user-routes');
const { REDIS_URL, REDIS_PORT, SESSION_SECRET } = require('./config/config');



let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const app = express();

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUinitialized: false,
        httpOnly: true,
        maxAge: 40000
    }
}))

redisClient.on('error', function(err) {
    console.log('*Redis Client Error: ' + err.message);
});
redisClient.on('connect', function(){
   console.log('Connected to redis instance');
});

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
app.use('/api/v1/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`app runnnig on port ${PORT}`)
})