const express = require('express');
const router = express.Router();



//add routes 
router.get('/', function(req, res) {
    res.render('index', {
        title: 'My Dev Skills'
    })
});



module.exports = router