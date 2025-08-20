module.exports = (sequelize, DataTypes) => {
  const TaskComment = sequelize.define(
    "TaskComment",
    {
      id: { type: DataTypes.CHAR, primaryKey: true },
      task_id: { type: DataTypes.CHAR, allowNull: false },
      user_id: { type: DataTypes.UUID, allowNull: false },
      comment: { type: DataTypes.TEXT, allowNull: false, validate: { len: [1, 999] } },
    },
    {
      tableName: "task_comments",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return TaskComment;
};
