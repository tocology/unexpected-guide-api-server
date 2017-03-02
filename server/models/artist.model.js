export default function (sequelize, DataTypes) {
  const Artist = sequelize.define('Artist', {
    artistId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    imageId: { type: DataTypes.BIGINT, allowNull: true },
    countryId: { type: DataTypes.BIGINT, allowNull: false },
    koreanName: { type: DataTypes.BIGINT, allowNull: true },
    englishName: { type: DataTypes.BIGINT, allowNull: false },
    birthday: { type: DataTypes.STRING(20), allowNull: true },
    deathday: { type: DataTypes.STRING(20), allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'artist',
    classMethods: {
      associate: (models) => {
        Artist.belongsTo(models.Image, {
          as: 'image',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: true
          }
        });
        Artist.belongsTo(models.Country, {
          as: 'country',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'countryId',
            allowNull: false
          }
        });
      }
    }
  });

  return Artist;
}