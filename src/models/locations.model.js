module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    locationId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    koreanName: { type: DataTypes.STRING(50), allowNull: true },
    englishName: { type: DataTypes.STRING(50), allowNull: true },
    zipCode: { type: DataTypes.STRING(10), allowNull: false },
    address : { type: DataTypes.STRING(255), allowNull: false },
    lat: { type: DataTypes.DOUBLE, allowNull: false },
    lng: { type: DataTypes.DOUBLE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'locations'
  });

  return Location;
}
