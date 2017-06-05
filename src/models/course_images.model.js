module.exports = function (sequelize, DataTypes) {
  const CourseImage = sequelize.define('CourseImage', {
    courseImageId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseImageIndex' },
    imageId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseImageIndex' },
    priority: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_images',
    classMethods: {
      associate: (models) => {
        CourseImage.belongsTo(models.Image, {
          as: 'image',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: false
          }
        })
      }
    }
  });

  return CourseImage;
}