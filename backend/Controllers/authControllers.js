import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import generateToken from "../Utils/genToken.js";


export const userSignUp = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            res.status(400).send({
                error: "all fields are required"
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).send({
                msg: "Password and confirm password do not match"
            });
        }


        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send({
                msg: "Username already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, 10);


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;


        const newUser = await User.create({
            fullName,
            username,
            password: hashpassword,
            profilePic
        });

        generateToken(newUser._id, res);

        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });


    } catch (err) {
        console.log("Error while signing up:", err.message);
        res.status(500).send({
            error: "Internal server error"
        });
    }
};

export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordIsCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordIsCorrect) {
            return res.status(400).json({
                error: "invalid username or password"
            })
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("error:", error.message);
        res.status(500).json({ error: "internal server error" })
    }
};

export const userLogout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0,
        })
        res.status(200).json({
            msg: "log out succesfully"
        })
    }
    catch (err) {
        console.log("Error while loging out:", err.message);
        res.status(500).json({ error: "internal server error" })
    }
};
