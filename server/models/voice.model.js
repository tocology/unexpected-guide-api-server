export default function (sequelize, DataTypes) {
  const Voice = sequelize.define('Voice', {
    voiceId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    url: { type: DataTypes.STRING(2083), allowNull: false },
    artId: { type: DataTypes.BIGINT, allowNull: false },
    docentId: { type: DataTypes.BIGINT, allowNull: false },
    enableStatus: { type: DataTypes.ENUM('ACTIVE', 'INACTIVE'), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'voice',
    classMethods: {
      associate: (models) => {
        Voice.belongsTo(models.Art, {
          as: 'Art',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'artId',
            allowNull: false
          }
        });
        Voice.belongsTo(models.Docent, {
          as: 'Docent',
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'docentId',
            allowNull: false
          }
        });
      }
    }
  });

  return Voice;
}