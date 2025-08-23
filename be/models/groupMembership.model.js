module.exports = (sequelize, DataTypes) => {
  const GroupMembership = sequelize.define(
    "GroupMembership",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      group_id: { type: DataTypes.INTEGER, allowNull: false },
      role: DataTypes.STRING,
      joined_at: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      tableName: "group_memberships",
      timestamps: false,
    }
  );

  return GroupMembership;
};
