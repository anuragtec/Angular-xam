const express = require ('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require ('')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With. Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

routes(app);

app.listen(port, function(){
    console.log('Running..')
})