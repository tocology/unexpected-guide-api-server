module.exports = function (sequelize, DataTypes) {
  const Docent = sequelize.define('Docent', {
    docentId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(200), allowNull: false },
    imageId: { type: DataTypes.BIGINT, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'docent',
    classMethods: {
      associate: (models) => {
        Docent.belongsTo(models.Image, {
          as: 'profileImage',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: true
          }
        });
        Docent.hasMany(models.Voice, {
          as: 'voiceList',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'docentId',
            allowNull: false
          }
        });
      }
    }
  });

  return Docent;
}