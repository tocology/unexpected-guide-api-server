module.exports = function (sequelize, DataTypes) {
  const CourseSpot = sequelize.define('CourseSpot', {
    courseSpotId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseSpotIndex' },
    spotId: { type: DataTypes.BIGINT, allowNull: false, unique: 'courseSpotIndex' },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'course_spots',
    classMethods: {
      associate: (models) => {
        CourseSpot.belongsTo(models.Spot, {
          as: 'spot',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'spotId',
            allowNull: false
          }
        });
      }
    }
  });

  return CourseSpot;
}
