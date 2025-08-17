const express = require("express");
const {
  getHomePage,
  getRegisterPage,
  getLoginPage,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hiếu vip vcl");
});

router.get("/home", getHomePage);

router.get("/register", getRegisterPage);

router.get("/login", getLoginPage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default router;
