module.exports = function (sequelize, DataTypes) {
  const Voice = sequelize.define('Voice', {
    voiceId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    url: { type: DataTypes.STRING(2083), allowNull: false },
    artId: { type: DataTypes.BIGINT, allowNull: false },
    docentId: { type: DataTypes.BIGINT, allowNull: false },
    price: { type: DataTypes.BIGINT, allowNull: false },
    avgStarPoint: { type: DataTypes.DOUBLE, allowNull: false },
    totLikeCount: { type: DataTypes.BIGINT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    enableStatus: { type: DataTypes.ENUM('ACTIVE', 'INACTIVE'), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'voices',
    classMethods: {
      associate: (models) => {
        Voice.belongsTo(models.Art, {
          as: 'art',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'artId',
            allowNull: false
          }
        });
        Voice.belongsTo(models.User, {
          as: 'docent',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'docentId',
            allowNull: false
          }
        });
      }
    }
  });

  return Voice;
}