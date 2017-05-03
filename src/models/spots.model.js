module.exports = function (sequelize, DataTypes) {
  const Spot = sequelize.define('Spot', {
    spotId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    artistId: { type: DataTypes.BIGINT, allowNull: true },
    voiceId: { type: DataTypes.BIGINT, allowNull: false },
    locationId: { type: DataTypes.BIGINT, allowNull: false },
    koreanName: { type: DataTypes.STRING(200), allowNull: true },
    englishName: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    spotType: { type: DataTypes.ENUM('BUILDING', 'ART'), defaultValue: 'BUILDING', allowNull: false },
    enableStatus: { type: DataTypes.ENUM('ACTIVE', 'INACTIVE'), defaultValue: 'ACTIVE', allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'spots',
    classMethods: {
      associate: (models) => {
        Spot.belongsTo(models.Artist, {
          as: 'artist',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'artistId',
            allowNull: true
          }
        });

        Spot.belongsTo(models.Voice, {
          as: 'voice',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'voiceId',
            allowNull: false
          }
        });

        Spot.belongsTo(models.Location, {
          as: 'location',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'locationId',
            foreignKey: false
          }
        });
      }
    }
  });

  return Spot;
}