import User from "../models/userModels.js";


export const userSignUp = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;


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

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;


        const newUser = new User({
            fullName,
            username,
            password,
            profilePic
        });


        await newUser.save();


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

export const userLogin = (req, res) => {
    console.log("User login");
};

export const userLogout = (req, res) => {
    console.log("User logout");
};
