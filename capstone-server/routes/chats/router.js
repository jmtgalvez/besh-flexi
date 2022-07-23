const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');


router.post('/', JWT.verifyToken, async(req, res) => {
    try {
        
        const posts = await CTRL.checkChatExists(req.body.user_id, req.body.receiver_id)
        .then(response =>{

        const chatMessage = {
            content: req.body.content,
            sender_id: req.body.user_id,
            chat_id: response.chat_id
        }
        console.log(chatMessage)

        CTRL.sendReply(chatMessage)
        
        res.status(200).json({
            status: 200,
            message: 'Successfully send message',
            chat_id: chatMessage.chat_id
        });
           
        })
    } catch (status) {
        res.status(status).json({ status });
        
        const messageData = {
            user_id: req.body.user_id,
            receiver_id: req.body.receiver_id
        }
        const new_message = CTRL.sendChat(messageData);

    }
})
module.exports = router;