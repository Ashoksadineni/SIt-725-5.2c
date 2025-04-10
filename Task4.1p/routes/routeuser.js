var express = require('express');
const router= express.Router();
const controller=require("../controllers/controlleruser")

//router.get('/api/projects', (req, res)=>{
    //res.send('this is Ashok!')
//});

module.exports = router;

router.get('/api/projects', (req,res)=>{
    controller.addContent(req,res)
    console.log("enter routes")
});
module.exports = router;