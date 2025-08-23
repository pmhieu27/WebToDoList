const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mariadb",
  }
);

sequelize.authenticate().then(() => {
  console.log('\x1b[1;32;49mConnection has been established successfully.\x1b[0;39;49m');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// Import models
const User = require("./user.model")(sequelize, DataTypes);
const Group = require("./group.model")(sequelize, DataTypes);
const GroupMembership = require('./groupMembership.model')(sequelize, DataTypes);
const Task = require("./task.model")(sequelize, DataTypes);
const TaskComment = require("./taskComment.model")(sequelize, DataTypes);
const TaskReminder = require("./taskReminder.model")(sequelize, DataTypes);
const ActivityLog = require("./activityLog.model")(sequelize, DataTypes);

// Relations
User.hasMany(Group, { foreignKey: "owner_id" });
Group.belongsTo(User, { foreignKey: "owner_id" });

User.belongsToMany(Group, { through: GroupMembership, foreignKey: "user_id" });
Group.belongsToMany(User, { through: GroupMembership, foreignKey: "group_id" });

Group.hasMany(Task, { foreignKey: "group_id" });
Task.belongsTo(Group, { foreignKey: "group_id" });

User.hasMany(Task, { as: "CreatedTasks", foreignKey: "creator_id" });
User.hasMany(Task, { as: "ApprovedTasks", foreignKey: "approver_id" });
Task.belongsTo(User, { as: "Creator", foreignKey: "creator_id" });
Task.belongsTo(User, { as: "Approver", foreignKey: "approver_id" });

Task.hasMany(TaskComment, { foreignKey: "task_id" });
TaskComment.belongsTo(Task, { foreignKey: "task_id" });
User.hasMany(TaskComment, { foreignKey: "user_id" });
TaskComment.belongsTo(User, { foreignKey: "user_id" });

Task.hasMany(TaskReminder, { foreignKey: "task_id" });
TaskReminder.belongsTo(Task, { foreignKey: "task_id" });

User.hasMany(ActivityLog, { foreignKey: "user_id" });
ActivityLog.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  User,
  Group,
  GroupMembership,
  Task,
  TaskComment,
  TaskReminder,
  ActivityLog,
};
