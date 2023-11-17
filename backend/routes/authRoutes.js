const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
    test,
    registerUser,
    loginUser,
    getProfile,
} = require("../controllers/authControllers");
//middleware
// router.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//     })
// );

router.get("/", (req, res) => {
    res.send("hello");
});
router.get("/profile", getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
