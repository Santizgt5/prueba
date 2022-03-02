const fs = require('fs');
const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const routes = [];
const routerFiles = fs.readdirSync(path.join(__dirname, 'routes'));

routerFiles.forEach((file) => {
    const router = require(`./routes/${file}`);
    routes.push({
        api:`/api/${file.replace('Router.js', '').toLowerCase()}`, 
        router
    })
})

const app = express();
const limiter = rateLimit({
    'max': 10, 
    'window': 10000,
    'message':'Too many requests'
})
app.use('/api', limiter);
app.use(express.json());
app.use(cors());

routes.forEach(route => {
    console.log(`loaded route ${route.api}`);
    app.use(route.api, route.router);
})

app.all('*', (req, res) => {
    res.send('Not found');
});

module.exports = app;