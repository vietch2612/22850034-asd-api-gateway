const express = require('express');

const { ROUTES } = require('./routes/routes');

const { setupProxies } = require('./service/proxy');
const { setupLogging } = require('./service/logging');
const { setupAuth } = require('./service/auth');

const app = express();
const port = 3000;

setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.get('/hello', (req, res) => {
    return res.send('HELLO WORLD!');
});

app.listen(port, () => {
    console.log(`Example app listing at http://localhost:${port}`);
})