import mongoose from 'mongoose';
import config from './index';
import log4js from '../utils/log4j';

mongoose.connect(config.URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
  log4js.error('********database connection failed********');
});

db.on('open', () => {
  log4js.info('********database connection successfully********');
});
