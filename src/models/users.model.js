module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(200), allowNull: false },
    imageId: { type: DataTypes.BIGINT, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'users',
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.Image, {
          as: 'profileImage',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: true
          }
        });
        User.hasMany(models.Voice, {
          as: 'voiceList',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'docentId',
            allowNull: false
          }
        });
        User.hasMany(models.VoicePurchase, {
          as: 'purchaseList',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'userId',
            allowNull: false
          }
        });
      }
    }
  });

  return User;
}