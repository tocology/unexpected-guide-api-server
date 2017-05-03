module.exports = function (sequelize, DataTypes) {
  const Voice = sequelize.define('Voice', {
    voiceId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    url: { type: DataTypes.STRING(2083), allowNull: false },
    guideId: { type: DataTypes.BIGINT, allowNull: false },
    price: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    runningTime: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    avgStarPoint: { type: DataTypes.DOUBLE, defaultValue: 0.0, allowNull: true },
    totLikeCount: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    description: { type: DataTypes.TEXT, defaultValue: '', allowNull: true },
    enableStatus: { type: DataTypes.ENUM('ACTIVE', 'INACTIVE'), defaultValue: 'ACTIVE', allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'voices',
    classMethods: {
      associate: (models) => {
        Voice.belongsTo(models.User, {
          as: 'guide',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'guideId',
            allowNull: false
          }
        });
      }
    }
  });

  return Voice;
}