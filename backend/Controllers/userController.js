import User from "../models/userModels.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loggerUserId = req.user._id;

        const fileteredUser = await User.find({ _id: { $ne: loggerUserId } }).select("-password")  // all user except logged user

        res.status(200).json(fileteredUser);




    }
    catch (error) {
        console.log("error while fetching the user:", error.message);
        return res.status(400).json({
            error: "internal error occured"
        })
    }
}