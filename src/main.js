import config from '../config/env';
import app from '../config/express';
import models from './models';
import Firebase from './helpers/Firebase';

const debug = require('debug')('api-server:server');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        debug(`server started on port ${config.port} (${config.env})`);
        models.sequelize.authenticate().then(() => {
            debug(`${config.mysql.DATABASE_URI} was successfully synchronized`);
        });
        Firebase.initialization();
    });
}

export default app;