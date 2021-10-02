const express = require("express");
const router = express.Router();

const { googleLogin } = require("../controllers/auth");
const { getUser } = require("../middlewares/auth");

router.post("/googlelogin", googleLogin);
router.get("/me", getUser);

module.exports = router;
