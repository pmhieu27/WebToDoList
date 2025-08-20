module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      id: { type: DataTypes.CHAR, primaryKey: true, autoIncrement: true },
      owner_id: { type: DataTypes.UUID, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
    },
    {
      tableName: "groups",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Group;
};
