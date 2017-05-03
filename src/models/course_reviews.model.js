module.exports = function (sequelize, DataTypes) {
  const CourseReview = sequelize.define('CourseReview', {
    courseReviewId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseUserIndex' },
    userId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseUserIndex' },
    starPoint: { type: DataTypes.DOUBLE, allowNull: false },
    comments: { type: DataTypes.TEXT, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_reviews',
    classMethods: {
      associate: (models) => {
        CourseReview.belongsTo(models.User, {
          as: 'user',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'userId',
            allowNull: false
          }
        });
      }
    }
  });

  return CourseReview;
}