// dependencies
const express = require('express');
let router = express.Router();

// entries
let aEntries = require('../models/indexData.model')

// main page annoucement page 
router.get('/', (req, res)=>{
    res.render('index')
    aEntries.find((req, res, next)=>{
    });
});

// about page
router.get('/about', (req, res)=>{
    res.render('about')
});

// contract page
router.get('/contract', (req, res)=>{
    res.render('contract')
});

// volunteer page
router.get('/volunteer', (req, res)=>{
    res.render('volunteer')
});

// exporting
module.exports = router