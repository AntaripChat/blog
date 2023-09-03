const mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1:27017/todo')
.then(()=>console.log("MongoDb Connected"))
.catch((err)=>console.log(err))