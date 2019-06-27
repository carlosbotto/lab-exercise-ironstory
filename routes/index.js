const express = require('express');
const router  = express.Router();

const Story = require('../models/Story.js')



const app = express();

/* GET home page */

router.get("/",(req, res, next) => { 
  Story.find({}).then(stories => {
    console.log(stories)

    res.render('index', {stories});

  })
})


router.post("/add-story", (req, res, next) => {
  Story.create({
    content: req.body.content,
    writer: req.body.writer
  }).then(story => { 
    console.log('The user is saved and its value is: ', story) 
    res.redirect("/")
  })
  .catch(err => { console.log('An error happened:', err) });
})  


module.exports = router;