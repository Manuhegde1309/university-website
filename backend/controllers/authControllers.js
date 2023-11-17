const { User } = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const test = (req, res) => {
    res.json("test is working");
};

//Register endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log("body: ", req.body);
        //Check if name is entered
        if (!name) {
            return res.json({
                error: "name is required",
            });
        }
        //check if password is entered
        if (!password || password.length < 6) {
            return res.json({
                error: "password is required and should be atleast 6 characters",
            });
        }
        //Check email
        const isUser = await User.findOne({ email });
        if (isUser) {
            return res.status(500).json({ err: "Email is already taken!" });
        }

        const user = new User({
            name,
            email,
            password,
        });
        await user.save().then((user) => {
            res.status(200).json(user);
        });
    } catch (error) {
        console.log(error);
    }
};
//Login endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body);

        // Check if user exists
        const user = await User.findOne({ email: email });

        console.log(user);
        if (!user) {
            return res.status(404).json({
                error: "No user found. Please register first.",
            });
        } else {
            if (password === user?.password) {
                jwt.sign(
                    {
                        email: user.email,
                        id: user._id,
                        name: user.name,
                    },
                    process.env.JWT_SECRET,
                    {},
                    (err, token) => {
                        if (err) throw err;
                        return res.status(200).json({ user, token });
                    }
                );
            } else {
                return res.status(401).json({
                    error: "Incorrect password.",
                });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
};

const getProfile = (req, res) => {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // Remove 'Bearer ' from the token header
    const token = tokenHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) {
            return res.status(401).json({ error: "Token verification failed" });
        } else {
            res.status(200).json(user);
        }
    });
};
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
};
