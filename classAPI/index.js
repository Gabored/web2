

const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes');  

dotenv.config();

const app = express();

let port = process.env.PORT || 3000;


app.use('/', routes);

app.listen(port, () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log('app is running in port: ' + port);
 
    } else {
        console.log('app is running');

    }
});
