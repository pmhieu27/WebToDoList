const express = require("express");
const {
  getHomePage,
  getRegisterPage,
  getLoginPage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/register", getRegisterPage);

router.get("/login", getLoginPage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default router;
