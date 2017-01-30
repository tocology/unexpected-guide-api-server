import env from './config/env';
import app from './config/express';
import models from './server/models';

const debug = require('debug')('api-server:server');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    // listen on port config.port
    app.listen(env.port, () => {
        debug(`server started on port ${env.port} (${env.env})`);
        models.sequelize.authenticate().then(() => {
            debug(`${env.mysql.DATABASE_URI} was successfully synchronized`);
        });
    });
}

export default app;