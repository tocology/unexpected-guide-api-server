export default function(sequelize, DataTypes) {
  const ArtImageMap = sequelize.define('ArtImageMap', {
    artImageMapId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    artId: { type: DataTypes.BIGINT, allowNull: false, unique: 'artImageMapIndex' },
    imageId: { type: DataTypes.BIGINT, allowNull: false, unique: 'artImageMapIndex' },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'art_image_map'
  });

  return ArtImageMap;
}