const {Router} = require('express');
const User = require('../models/user');

const router = Router();

router.get('/signin',(req,res)=>{
    return res.render("signin");
});

router.post('/signin',async(req,res)=>{
    const user = await User.findOne({userid:req.body.userid});

    if(user===null){
        return res.redirect('/signin');
    }

    const isPasswordValid = await User.findOne({password:req.body.password});

    if(isPasswordValid == null){
        return res.render("signin",{
            error : "Incorrect userid or password",
        });
    }

    
    // res.status(200).send({mag:"hello"})
    return res.redirect('/');
})


router.get('/signup',(req,res)=>{
    return res.render("signup");
});

router.post('/signup',async(req,res)=>{
    const {fullname,userid,password} = req.body;
    await User.create({
        fullname,
        userid,
        password,
    })
    //return res.redirect('/');
    return res.render("home",{
            msg : "Your Data is Save",
        });
})



module.exports = router;
