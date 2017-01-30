export default function(sequelize, DataTypes) {
  const Docent = sequelize.define('Docent', {
    docentId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(200), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'docent',
    classMethods: {
      associate: (models) => {
        Docent.belongsTo(models.Image, {
          onUpdate: 'CASCADE',
          foreignKey: {
            name: 'imageId',
            allowNull: true
          }
        })
      }
    }
  })

  return Docent;
}