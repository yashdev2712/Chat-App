import Conversation from "../models/conversationModels.js";
import Message from "../models/messageModels.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }



        return res.status(201).json({
            newMessage
        });
    } catch (error) {
        console.log("error occurred:", error.message);
        res.status(500).json({
            error: "internal server error"
        });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages;


        return res.status(200).json(
            messages
        )

    }
    catch (error) {
        console.log("error occurred while sending message:", error.message);
        return res.status(500).json({
            error: "internal server error"
        })
    }
}