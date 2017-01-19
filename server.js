import util from 'util';
import config from './config/env';
import app from './config/express';
import { sequelize } from './config/dbConnection';

const debug = require('debug')('docent-api-server:server');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        debug(`server started on port ${config.port} (${config.env})`);
        sequelize.sync()
            .then(() => {
            debug(`database sync ${config.db.database}`);
            });
    });
}

export default app;