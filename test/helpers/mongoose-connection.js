'use strict';

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/koa-session-mongoose';

mongoose.Promise = Promise;

module.exports = async () => mongoose.connect(uri, { useMongoClient: true });
