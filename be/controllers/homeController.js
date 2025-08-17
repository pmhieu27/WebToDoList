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

const postCreateUser = (req, res) => {
  console.log(req.body);
  //   let email = req.body.email;
  //   let name = req.body.name;
  //   let city = req.body.city;
  let { email, name, city } = req.body;
  console.log(email, name, city);
  connection.query(
    "INSERT INTO users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    function (error, results, fields) {
      if (error) {
        console.error("Error inserting user:", error);
        return res.status(500).send("Error creating user");
      }
      console.log("User created successfully:");
    }
  );
  res.send("User created successfully!");
};

module.exports = {
  getHomePage,
  getRegisterPage,
  getLoginPage,
  postCreateUser,
};
