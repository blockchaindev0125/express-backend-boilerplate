const express = require('express');
const cors = require('cors');

const app = express();
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');
const authenticationRouter = require('./routers/authentication.router');
const postsRouter = require('./routers/posts.router');
const usersRouter = require('./routers/users.router');

// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(bodyParser);
app.use(cors());

// setting routers
app.use('/authentication', authenticationRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

module.exports = app;
