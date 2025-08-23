module.exports = (sequelize, DataTypes) => {
  const TaskReminder = sequelize.define(
    "TaskReminder",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      task_id: { type: DataTypes.INTEGER, allowNull: false },
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
