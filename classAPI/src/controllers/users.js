const User = require('./../models/user') ;
const ResponseStatus = require('./../utils/response-status');

class UsersController {

    getUsers(req, res){
        const user = new User();
        console.log('Who did this petition ? ' , req.user);
        user.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('Something Went Wrong!');
        });
    }

    createUser(req, res){
        res.send('Creating User');
    }

    findUserById(req, res) {
        const userId = req.params.id;
        console.log('Who did this petition ? ' , req.user);
        user.findUserById(userId).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('Something Went Wrong!');
        });
    
        res.send('Finding by ID');
    }

} 

module.exports = new UsersController();

