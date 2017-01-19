import config from './env';
import Sequelize from 'sequelize';

export const sequelize =
    new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);