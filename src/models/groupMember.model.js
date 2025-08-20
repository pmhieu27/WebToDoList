const { status } = require("express/lib/response");

module.exports = (sequelize, DataTypes) => {
  const GroupMembership = sequelize.define(
    "GroupMembership",
    {
      id: { type: DataTypes.CHAR, primaryKey: true },
      user_id: { type: DataTypes.UUID, allowNull: false },
      group_id: { type: DataTypes.CHAR, allowNull: false },
      role: {
        type: DataTypes.ENUM("member", "admin", "owner"),
        defaultValue: "member",
      },
      join_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: {
        type: DataTypes.ENUM("active", "inactive", "banned"),
        defaultValue: "active",
      },
    },
    {
      tableName: "group_memberships",
      timestamps: false,
    }
  );

  return GroupMembership;
};
