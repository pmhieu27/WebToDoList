const getHomePage = (req, res) => {
  return res.send("<h1>Welcome to the Home Page</h1>");
};

const getRegisterPage = (req, res) => {
  return res.render("sample.ejs", { title: "Register Page" });
};

const getLoginPage = (req, res) => {
  return res.send("<h1>Welcome to the Login Page</h1>");
};

module.exports = {
  getHomePage,
  getRegisterPage,
  getLoginPage
};
