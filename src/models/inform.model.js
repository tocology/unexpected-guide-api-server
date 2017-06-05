module.exports = function (sequelize, DataTypes) {
  const Inform = sequelize.define('Inform', {
    informId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    spotInformId: { type: DataTypes.BIGINT, allowNull: false },
    infoType: { type: DataTypes.ENUM('ROUTE', 'PUBLIC'), allowNull: false },
    imageId: { type: DataTypes.BIGINT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    priority: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'inform'
  });

  return Inform;
};
