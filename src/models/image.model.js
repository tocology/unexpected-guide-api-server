module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    imageId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    url: { type: DataTypes.STRING(2083), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'image'
  });

  return Image;
}