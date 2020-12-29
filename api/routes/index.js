/**
 * Module dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const hpp = require('hpp');
const helmet = require('helmet');
const ping = require('./ping');
const explorer = require('./explorer');

const router = express.Router();

router.use([
  compression(),
  helmet({
    frameguard: false,
    dnsPrefetchControl: {
      allow: true,
    },
  }),
  bodyParser.urlencoded({ limit: '100kb', extended: true }),
  bodyParser.json({ limit: '100kb' }),
  hpp(),
]);

/**
 * Mount routes
 */
router.use('/', ping);
router.use('/mempool-explorer', explorer);

/**
 * Espose API Router
 */
module.exports = router;
