const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');

router.post('/conversation', JWT.verifyToken, async(req, res) => {
    try{
        const chat = await CTRL.checkChatExists(req.body.sender_id, req.body.receiver_id)
        .then(response => {

            const conversation =  CTRL.getConversation(response.chat_id)
            .then(response =>{
                res.status(200).json({
                    status: 200,
                    message: 'Success',
                    conversation: response
                })
            })
        })
    }catch(status){
        res.status(status).json({ status });
    }
})


router.post('/', JWT.verifyToken, async(req, res) => {
    try {
        
        const chat = await CTRL.checkChatExists(req.body.user_id, req.body.receiver_id)
        .then(response =>{
        const chatMessage = {
            content: req.body.content,
            sender_id: req.body.user_id,
            chat_id: response.chat_id
        }
        CTRL.sendReply(chatMessage).then(response =>{
            res.status(200)
            .json({
               status: 200,
               message: 'Successfully send',
               chat_id: chatMessage.chat_id
            })
        })
        
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