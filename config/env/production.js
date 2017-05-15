export default {
  env: 'production',
  // MONGOOSE_DEBUG: true,
  jwtSecret: 'uxguide-api-development',
  port: 3000,
  // for MySQL setup
  // todo: set mysql connection port
  mysql: {
    database: 'uxguide',
    username: 'succeednicely',
    password: 'failnicely',
    params: {
      options: {
        dialect: 'mysql',
        host: '52.79.130.5',
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