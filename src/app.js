const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const routes = require('./routes/index');

// Register view engine
app.engine('handlebars', handlebars());
// Use Handlebars view engine
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * test static files served here
 */
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'js', 'jpg', 'css'],
    fallthrough: true,
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: (response, path, status) => {
        response.set('x-timestamp', Date.now())
    }
}
app.use(express.static(`${__dirname}/public/`, options));

app.use('/', routes);

module.exports = app;
