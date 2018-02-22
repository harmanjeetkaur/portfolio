const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'My portfolio',
                        message: 'Harmanjeet Kaur'});
});

//GET: /About
router.get('/about', (req, res, next)=> {
    //load the about view
    res.render('about', {
        title: 'About me',
        message:''
    });
});


module.exports = router;
