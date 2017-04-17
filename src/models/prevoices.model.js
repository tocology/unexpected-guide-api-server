module.exports = function (sequelize, DataTypes) {
  const Prevoice = sequelize.define('Prevoice', {
    prevoiceId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.BIGINT, allowNull: false },
    artName: { type: DataTypes.STRING(200), allowNull: false },
    artistName: { type: DataTypes.STRING(100), allowNull: true },
    address: { type: DataTypes.STRING(500), allowNull: true },
    zipCode: { type: DataTypes.STRING(10), allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    url: { type: DataTypes.STRING(2083), allowNull: false },
    prevoiceStatus: { type:DataTypes.ENUM('PENDING', 'REGISTERED', 'BANNED'), allowNull: false, defaultValue: 'PENDING' },
    prevoiceType: { type:DataTypes.ENUM('ART', 'PLACE'), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'prevoices'
  });

  return Prevoice;
}