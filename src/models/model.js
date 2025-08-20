const { Sequelize, DataTypes } = require("sequelize");
import { db_name, db_user, db_password, db_host, db_dialect } from "../config/database.js";

const sequelize = new Sequelize(db_name, db_user, db_password, { host: db_host, dialect: db_dialect });

// Import models
const User = require("./user.model.js")(sequelize, DataTypes);
const Group = require("./group.model.js")(sequelize, DataTypes);
const GroupMembership = require("./groupMembership.model")(sequelize, DataTypes);
const Task = require("./task.model.js")(sequelize, DataTypes);
const TaskComment = require("./taskComment.model.js")(sequelize, DataTypes);
const TaskReminder = require("./taskReminder.model.js")(sequelize, DataTypes);
const ActivityLog = require("./activityLog.model.js")(sequelize, DataTypes);

// Relations
// User -> Group (1)
User.hasMany(Group, { foreignKey: "owner_id" });
Group.belongsTo(User, { foreignKey: "owner_id" });

// User <-> Group (n - n)
User.belongsToMany(Group, { through: GroupMembership, foreignKey: "user_id" });
Group.belongsToMany(User, { through: GroupMembership, foreignKey: "group_id" });

// Group -> Task (1 - n)
Group.hasMany(Task, { foreignKey: "group_id" });
Task.belongsTo(Group, { foreignKey: "group_id" });

//
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
