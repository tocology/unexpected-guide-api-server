export default {
    env: 'development',
    MONGOOSE_DEBUG: true,
    jwtSecret: 'besoul-api-development',
    port: 3000,
    // for MySQL setup
    /*
    db: {
        database: 'besoul',
        user: 'successnicely',
        password: 'gangnamtoz!@#',
        options: {
            host: 'localhost',
            dialect: 'mysql',

            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        }
    }
*/

    db: {
        database: 'docent_dev',
        user: 'docent_user',
        password: '',
        options: {
            host: 'localhost',
            dialect: 'mysql',

            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        }
    }
};