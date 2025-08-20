module.exports = (sequelize, DataTypes) => {
  const TaskReminder = sequelize.define(
    "TaskReminder",
    {
      id: { type: DataTypes.CHAR, primaryKey: true },
      task_id: { type: DataTypes.CHAR, allowNull: false },
      reminder_time: { type: DataTypes.DATE, allowNull: false },
      sent_at: { type: DataTypes.DATE },
    },
    {
      tableName: "task_reminders",
      timestamps: false,
    }
  );

  return TaskReminder;
};
