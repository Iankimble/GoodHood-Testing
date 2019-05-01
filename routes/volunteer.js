const express = require('express');
let router = express.Router();

router.get('/volunteer', (req, res) => {
    res.render('volunteer')
});

module.exports = router