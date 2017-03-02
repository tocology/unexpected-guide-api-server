export default {
    env: 'local',
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
                port: 3305,

                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000
                }
            }
        }
    }
};