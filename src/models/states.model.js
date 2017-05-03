module.exports = function (sequelize, DataTypes) {
  const State = sequelize.define('State', {
    stateId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    koreanName: { type: DataTypes.STRING(50), allowNull: true },
    englishName: { type: DataTypes.STRING(50), allowNull: false },
    countryId: { type: DataTypes.BIGINT, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'states'
  });

  return State;
}
