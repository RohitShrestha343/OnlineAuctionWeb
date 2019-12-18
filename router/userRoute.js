const express = require("express");
const router = express.Router();
const multer=require("multer");
//const auth = require("../middleware/auth");
//const fs = require("fs");
const User = require("../model/userModel");
//const bcrypt = require("bcryptjs"); 

//route for registering users
router.post("/register", (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        res.status(201).json({
          message_error: "Mail already exists"
        });
      } else {
        // if(req.body.password != null){
        //   var pass = bcrypt.hashSync(req.body.password);
        // }
          
        const user = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password:req.body.password,
          profile_image: "",
                         });
        user
          .save()
          .then(result => {
            res.status(201).json({
              message_success: "Register Successful"
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              message: err
            });
          });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err
        
      });
    });
});

router.post('/login',(req,res,next)=>{
  console.log("hello");
  // var usr = User.count();
  User.find({ email: req.body.email , password: req.body.password})
  .exec()
  .then(user => {
    if (user.length >= 1) {
      res.status(200).json({
        email: `${req.body.email}`,
        password: `${req.body.password}`
      });

      // if(user){}
      //send dashboard page url
    } else {
      res.status(400).json({
        message_error: "EMAIL OR PASSWORD MISTAKE"
      });
    }

  })
  .catch(err => console.log(err))
});

router.get('/login',(req,res,next)=>{
  res.send('SAJIK');

})

module.exports = router;
