export const sendMessage = async (req, res) => {
    console.log("message sent");
    res.status(200).json({
        msg:'message sent'
    })

} 