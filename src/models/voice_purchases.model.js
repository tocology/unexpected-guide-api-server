module.exports = function (sequelize, DataTypes) {
  const VoicePurchase = sequelize.define('VoicePurchase', {
    voicePurchaseId: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.BIGINT, allowNull: false },
    voiceId: { type: DataTypes.BIGINT, allowNull: false },
    playStartedAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'voice_purchases'
  });

  return VoicePurchase;
}