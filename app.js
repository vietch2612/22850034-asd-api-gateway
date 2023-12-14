const express = require('express');
const cors = require('cors');

const { ROUTES } = require('./routes/routes');

const { setupProxies } = require('./services/proxy');
const { setupLogging } = require('./services/logging');
const { setupAuth } = require('./services/auth');

const app = express();

const corsOptions = {
    origin: true,
    credentials: true
}
app.options('*', cors(corsOptions));

setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);


module.exports = app;