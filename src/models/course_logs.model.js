module.exports = function (sequelize, DataTypes) {
  const CourseLog = sequelize.define('CourseLog', {
    courseLogId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false },
    userId: { type: DataTypes.BIGINT, allowNull: true },
    logType: { type: DataTypes.ENUM('VIEW'), allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_logs',
    timestamps: false
  });

  return CourseLog;
}