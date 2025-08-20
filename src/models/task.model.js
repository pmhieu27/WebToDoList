module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      id: { type: DataTypes.CHAR, primaryKey: true },
      group_id: { type: DataTypes.CHAR, allowNull: false },
      creator_id: { type: DataTypes.UUID, allowNull: false },
      approver_id: { type: DataTypes.UUID },
      name: { type: DataTypes.STRING, allowNull: false },
      start_date: { type: DataTypes.DATE },
      end_date: { type: DataTypes.DATE },
      notes: { type: DataTypes.TEXT },
      status: {
        type: DataTypes.ENUM("pending", "in_progress", "completed", "cancelled"),
        defaultValue: "pending",
      },
      priority: {
        type: DataTypes.ENUM("low", "medium", "high"),
        defaultValue: "medium",
      },
      details: { type: DataTypes.TEXT },
    },
    {
      tableName: "tasks",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Task;
};
