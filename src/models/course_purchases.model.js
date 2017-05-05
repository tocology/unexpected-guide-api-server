module.exports = function (sequelize, DataTypes) {
  const CoursePurchase = sequelize.define('CoursePurchase', {
    coursePurchaseId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.BIGINT, allowNull: false },
    courseId: { type: DataTypes.BIGINT, allowNull: false },
    playStartedAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_purchases'
  });

  return CoursePurchase;
}