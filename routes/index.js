const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: '',
                        message: '  '});
});

//GET: /About
router.get('/about', (req, res, next)=> {
    //load the about view
    res.render('about', {
        title: '',
        message:''
    });
});

//GET: /project
router.get('/project', (req, res, next)=> {
    //load the about view
    res.render('project', {
        title: '',
        message:''
    });
});

//GET: /services
router.get('/services', (req, res, next)=> {
    //load the about view
    res.render('services', {
        title: '',
        message:''
    });
});

//GET: /About
router.get('/contact', (req, res, next)=> {
    //load the about view
    res.render('contact', {
        title: '',
        message:''
    });
});

router.get('/contact', (req, res, next)=> {
    //load the about view
    res.render('contact', {
        title: '',
        message:''
    });
});
module.exports = router;
