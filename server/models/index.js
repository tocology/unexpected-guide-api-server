import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from 'config/env';

const sequalize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql.params.options);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(file => {
    const model = sequalize.import(path.resolve(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequalize;
db.Sequelize = Sequelize;

export default db;
