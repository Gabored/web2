
const router = require('express').Router();
const authRoutes = require('./auth');
const usersRoutes = require('./users');

router.get('/test', (req, res) => {
    res.send('Endpoint working');
});

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);


module.exports = router;
