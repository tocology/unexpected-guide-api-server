module.exports = function (sequelize, DataTypes) {
  const CourseLike = sequelize.define('CourseLike', {
    courseLikeId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseUserIndex' },
    userId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseUserIndex' },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_likes',
    classMethods: {
      associate: (models) => {
        CourseLike.hasOne(models.User, {
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

  return CourseLike;
}