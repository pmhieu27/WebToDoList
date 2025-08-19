module.exports = (sequelize, DataTypes) => {
  const TaskComment = sequelize.define(
    "TaskComment",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      task_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      comment: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      tableName: "task_comments",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );

  return TaskComment;
};
