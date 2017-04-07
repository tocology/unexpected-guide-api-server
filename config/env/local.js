export default {
    env: 'local',
    // MONGOOSE_DEBUG: true,
    jwtSecret: 'besoul-api-development',
    port: 3000,
    // for MySQL setup
    mysql: {
        database: 'unexpectedguide',
        username: 'succeednicely',
        password: 'failnicely',
        params: {
            options: {
                dialect: 'mysql',
                host: 'localhost',
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