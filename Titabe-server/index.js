const express = require ("express")
const morgan = require ('morgan') //logger
const cors = require ('cors')
const db = require('./database/models')

const app = module.exports = express()

const port = process.env.PORT || 3001
process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.json('Hello World');
});

//Routers
/*const storeRouter = require ('./api/storeRouter')
app.use('/api/store', storeRouter)*/
const usersRouter = require ('./routes/usersRouter')
app.use('/api/users', usersRouter)

if(!module.parent){
    app.listen(port);
    console.log(`Express started on port ${port}`);
}

db.sequelize.sync().then(()=>{
    console.log('Database sync')
})