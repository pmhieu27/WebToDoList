module.exports = (sequelize, DataTypes) => {
  const ActivityLog = sequelize.define(
    "ActivityLog",
    {
      id: { type: DataTypes.CHAR, primaryKey: true },
      user_id: { type: DataTypes.UUID, allowNull: false },
      action: { type: DataTypes.STRING, allowNull: false },
      target_type: { type: DataTypes.STRING },
      target_id: { type: DataTypes.INTEGER },
      timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      details: { type: DataTypes.JSON },
    },
    {
      tableName: "activity_logs",
      timestamps: false,
    }
  );

  return ActivityLog;
};
