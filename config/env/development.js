export default {
    env: 'development',
    // MONGOOSE_DEBUG: true,
    jwtSecret: 'besoul-api-development',
    port: 3000,
    // for MySQL setup
    // todo: set mysql connection port
    mysql: {
        database: 'unexpectedguide',
        username: 'succeednicely',
        password: 'failnicely',
        params: {
            options: {
                dialect: 'mysql',
                host: 'unexpectedguide_mysql',
                port: 3306,

                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000
                }
            }
        }
    }
};