const express = require('express');
const morgan = require('morgan');
var cors = require('cors')

const app = express();

const productRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/order');
const bodyParser = require('body-parser')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Enable CORS for all origins
app.use(cors({ origin: '*' }));

app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((err,req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});

module.exports = app;