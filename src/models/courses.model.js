module.exports = function (sequelize, DataTypes) {
  const Course = sequelize.define('Course', {
    courseId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    stateId: { type: DataTypes.BIGINT, allowNull: false },
    thumbImageId: { type: DataTypes.BIGINT, allowNull: false },
    prelistenVoiceId: { type: DataTypes.BIGINT, allowNull: false },
    mapImageId: { type: DataTypes.BIGINT, allowNull: false },
    guideId: { type: DataTypes.BIGINT, allowNull: false },
    title: { type: DataTypes.STRING(200), allowNull: false },
    price: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    buildingCount: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: true },
    artCount: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: true },
    restaurantCount: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: true },
    totRunningTime: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    avgStarPoint: { type: DataTypes.DOUBLE, defaultValue: 0.0, allowNull: true },
    totReviewCount: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    totLikeCount: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    totViewCount: { type: DataTypes.BIGINT, defaultValue: 0, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    guideTip: { type: DataTypes.TEXT, allowNull: true },
    enableStatus: { type: DataTypes.ENUM('ACTIVE', 'INACTIVE'), defaultValue: 'ACTIVE', allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'courses',
    classMethods: {
      associate: (models) => {
        Course.belongsTo(models.State, {
          as: 'state',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'stateId',
            allowNull: false
          }
        });

        Course.belongsTo(models.Image, {
          as: 'thumbImage',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'thumbImageId',
            allowNull: false
          }
        });

        Course.belongsTo(models.Voice, {
          as: 'prelistenVoice',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'prelistenVoiceId',
            allowNull: false
          }
        });

        Course.belongsTo(models.Image, {
          as: 'mapImage',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'mapImageId',
            allowNull: false
          }
        });

        Course.belongsTo(models.User, {
          as: 'guide',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'guideId',
            allowNull: false
          }
        });

        Course.belongsToMany(models.Spot, {
          as: 'spots',
          through: models.CourseSpot,
          foreignKey: 'courseId',
          otherKey: 'spotId'
        });

        Course.hasMany(models.HashTag, {
          as: 'hashTags',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'courseId',
            allowNull: false
          }
        });

        Course.belongsToMany(models.Image, {
          as: 'images',
          through: models.CourseImage,
          foreignKey: 'courseId',
          otherKey: 'imageId'
        });
      }
    }
  });

  return Course;
}