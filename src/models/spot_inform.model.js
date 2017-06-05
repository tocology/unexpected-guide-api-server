module.exports = function (sequelize, DataTypes) {
  const SpotInform = sequelize.define('SpotInform', {
    spotInformId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    spotId: { type: DataTypes.BIGINT, allowNull: false },
    title: { type: DataTypes.STRING(200), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'spot_inform',
    classMethods: {
      associate: (models) => {
        SpotInform.hasMany(models.Inform, {
          as: 'informList',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'spotInformId',
            allowNull: false
          }
        });
      }
    }
  });

  return SpotInform;
};
