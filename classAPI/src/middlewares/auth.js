const ResponseStatus = require('./../utils/response-status');

const authUser = {
    id: 1, 
    role: 'admin',
    name: 'John Doe'
}

const authMW =  (req, res, next) => {
    const { token } = req.query;
    if (token && token === '123'){
        req.user = {...authUser};
        console.log('Auth Passed!')
        next()
    } else {
        res.sendStatus(ResponseStatus.UNAUTHENTICATED)
    }
}

module.exports=authMW