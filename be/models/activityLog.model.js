module.exports = (sequelize, DataTypes) => {
  const ActivityLog = sequelize.define(
    "ActivityLog",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
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
