const app = require('./app');
const UserRouter = require('./src/routes/user');

require('./src/config/db');
const port = 8080;

app.get('/',(req,res)=>{
    res.render("home");
});

app.use("/",UserRouter)

app.listen(port,()=>console.log(`App running on ${port}`));