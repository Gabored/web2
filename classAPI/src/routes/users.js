const router = require('express').Router();
const usersController = require('./../controllers/users'); //Using the UsersController Object Instance
const authMW = require('./../middlewares/auth'); // MW 
const adminMW = require('./../middlewares/admin')

router.use(authMW);
router.use(adminMW);
                // Middleware
router.get('', usersController.getUsers); // Matching function 
router.get('/:id',usersController.findUserById);
router.post('', usersController.createUser);

module.exports = router ;

