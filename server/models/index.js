import Sequelize from 'sequelize';
import { sequelize } from '../../config/dbConnection';

const Users = sequelize.define('users', {
    id : { type : Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true}
    , username: { type: Sequelize.STRING }
    , password: { type: Sequelize.STRING }
    , email: { type: Sequelize.STRING }
});

const Arts = sequelize.define('arts', {
    id : { type : Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true}
    , name : { type : Sequelize.STRING, allowNull: true, defaultValue: null}
    , artistName : { type : Sequelize.STRING, allowNull: true, defaultValue: null}
    , createdDate : { type : Sequelize.DATE, allowNull: true, defaultValue: null}
    , description : { type : Sequelize.STRING, allowNull: true, defaultValue: null}
}, { timestamps: false } );

export default {
    Users,
    Arts
};
