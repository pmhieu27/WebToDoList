module.exports = (sequelize, DataTypes) => {
  const GroupMembership = sequelize.define(
    "GroupMembership",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      group_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      tableName: "group_memberships",
      timestamps: false,
    }
  );

  return GroupMembership;
};
