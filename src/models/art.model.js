module.exports = function (sequelize, DataTypes) {
  const Art = sequelize.define('Art', {
    artId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    artistId: { type: DataTypes.BIGINT, allowNull: true },
    thumbImageId: { type: DataTypes.BIGINT, allowNull: true },
    koreanName: { type: DataTypes.STRING(200), allowNull: true },
    englishName: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'art',
    classMethods: {
      associate: (models) => {
        Art.belongsTo(models.Artist, {
          as: 'artist',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'artistId',
            allowNull: true
          }
        });
        Art.belongsTo(models.Image, {
          as: 'thumbImage',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'thumbImageId',
            allowNull: true
          }
        });
        Art.belongsToMany(models.Image, {
          as: 'images',
          through: models.ArtImageMap,
          foreignKey: 'artId',
          otherKey: 'imageId'
        });
      }
    }
  });

  return Art;
}