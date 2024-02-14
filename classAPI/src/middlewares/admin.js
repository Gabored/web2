const ResponseStatus = require('./../utils/response-status');

const adminMW =  (req, res, next) => {
   
    console.log(req.user.role);
    const { role }   = req.user;

    if (role && role == 'admin'){
        console.log('Admin Passed!')
        next()
    } else {
        res.sendStatus(ResponseStatus.UNAUTHENTICATED)
    }
}

module.exports=adminMW