const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getRegisterPage = (req, res) => {
  return res.render("sample.ejs", { title: "Register Page" });
};

const getLoginPage = (req, res) => {
  return res.send("<h1>Welcome to the Login Page</h1>");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs", { title: "Create User Page" });
};

const postCreateUser = async (req, res) => {
  // Get user info from form
  const {
    username,
    email,
    password, // In production, hash this!
    name,
    avatar_url,
    notification_preferences
  } = req.body;
  // Set default values if needed
  const password_hash = password; // Replace with hash in production
  const created_at = new Date();
  const updated_at = new Date();

  try {
    await User.create({
      username,
      email,
      password_hash,
      name,
      avatar_url,
      notification_preferences,
      created_at,
      updated_at
    });

    console.log("User created successfully");
    return res.send("User created successfully");
  } catch (error) {
    console.error("Error inserting user:", error);
    return res.status(500).send("Error creating user");
  }
};

module.exports = {
  getHomePage,
  getRegisterPage,
  getLoginPage,
  postCreateUser,
  getCreatePage,
};
