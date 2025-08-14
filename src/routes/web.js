const express = require("express");
const {
  getHomePage,
  getRegisterPage,
  getLoginPage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hiếu vip vcl");
});

router.get("/home", getHomePage);

router.get("/register", getRegisterPage);

router.get("/login", getLoginPage);

module.exports = router; //export default router;
