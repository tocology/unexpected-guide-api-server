module.exports = function (sequelize, DataTypes) {
  const SpotImage = sequelize.define('SpotImage', {
    spotImageId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    spotId: { type: DataTypes.BIGINT, allowNull: false },
    imageId: { type: DataTypes.BIGINT, allowNUll: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'spot_images',
    classMethods: {
      associate: (models) => {
        SpotImage.belongsTo(models.Image, {
          as: 'image',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: false
          }
        });
      }
    }
  });

  return SpotImage;
};