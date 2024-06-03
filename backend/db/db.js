import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.Monogoose_URI);
        console.log("db connected");
    } catch (error) {
        console.log("Error while connecting to db:", error.message);
    }
}

export default connectToDb;