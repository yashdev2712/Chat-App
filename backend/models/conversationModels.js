import mongoose, { mongo } from "mongoose";

const conversationSchmea = new mongoose.Schema({
    participant: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ], messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]


}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationSchmea);

export default Conversation