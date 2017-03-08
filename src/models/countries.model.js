module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define('Country', {
    countryId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    koreanName: { type: DataTypes.STRING(50), allowNull: true },
    englishName: { type: DataTypes.STRING(50), allowNull: false },
    countryCode: { type: DataTypes.STRING(5), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'countries'
  });

  return Country;
}