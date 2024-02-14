const router = require('express').Router();

router.get('', (req, res) => {
    res.send('Auth Works');
})

module.exports = router 
