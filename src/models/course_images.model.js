module.exports = function (sequelize, DataTypes) {
  const CourseImage = sequelize.define('CourseImage', {
    courseImageId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseImageIndex' },
    imageId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseImageIndex' },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_images'
  });

  return CourseImage;
}