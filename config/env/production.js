export default {
  env: 'development',
  // MONGOOSE_DEBUG: true,
  jwtSecret: 'uxguide-api-development',
  port: 3000,
  // for MySQL setup
  mysql: {
    database: 'uxguide',
    username: 'succeednicely',
    password: 'failnicely',
    params: {
      options: {
        dialect: 'mysql',
        host: 'uxguide_mysql',
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