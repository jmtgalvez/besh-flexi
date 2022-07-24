const express = require('express');
const router = express.Router();

const JWT = require('../auth/jwt');
const CTRL = require('./controller');

router.get('/:post_id', JWT.verifyToken, async (req,res) => {
    try {
        const comments = await CTRL.getAllComments(req.params.post_id, req.user_id);
        
        res.status(200).json({
            status: 200,
            message: 'Successfully retrieved comments',
            comments
        })
    } catch(status) {
        res.status(status).json({ status })
    }
})

router.post('/:post_id', JWT.verifyToken, async (req,res) => {
    try {
        await CTRL.checkPostExists(req.body.reply_id);
        const commentData = {
            content: req.body.content,
            reply_id: req.body.reply_id,
            date: new Date(req.body.date),
            user_id: req.user_id
        }

        await CTRL.addComment(commentData)
        .then( async () => {
            
            const comments = await CTRL.getAllComments(req.body.reply_id, req.user_id)
            res.status(200).json({
                status: 200,
                message: 'Successfully added comment',
                comments
            })
        })
    } catch(status) {
        res.status(status).json({ status })
    }
})

router.put('/:post_id', JWT.verifyToken, async (req,res) => {
    try {

    } catch(status) {
        res.status(status).json({ status })
    }
})

router.delete('/:post_id', JWT.verifyToken, async (req,res) => {
    try {

    } catch(status) {
        res.status(status).json({ status })
    }
})

module.exports = router;