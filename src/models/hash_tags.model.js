module.exports = function (sequelize, DataTypes) {
  const HashTag = sequelize.define('HashTag', {
    hashTagId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.BIGINT, allowNull: false },
    tagName: { type: DataTypes.STRING(20), allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'hash_tags'
  });

  return HashTag;
}