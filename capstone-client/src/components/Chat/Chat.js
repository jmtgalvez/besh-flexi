import React, {useContext, useState} from 'react'
import ChatContent from './ChatContent';
import './Chat.css'
import { sendChat } from '../api/chat';
import { UserContext } from '../UserContext';

export default function Chat () {
    const { user } = useContext(UserContext);

    const handleSubmit = async ev =>{

        const chatData = {
            access_token: user.access_token,
            content: 'Sample message',
            user_id: user.user_id,
            receiver_id: '5',
        }
        
        await sendChat(chatData)
        .then(response =>{
            console.log(response.status)
        })
        
    }
  return (
    <div>
        <div className="card chat-container">
            <div className="card-header d-flex justify-content-center p-2 hideoverflow">
            </div>
            <div className="card-body row">
                <div className="col-sm-4 d-flex justify-content-center p-2">
                        <div className="card p-2 w-100">
                            Friend List
                        </div>
                </div>
                <div className="col-sm-8 p-2">
                        <div className="card p-2 w-100">
                            <ChatContent 
                            you='own' messageContent='hellsfgfddgddddddddddgdfgdfgdffffffgggggggggggggggggggggfdsfsdfdsfsdfsdfsdfsdfdsfggo'
                            time='1hour ago'/>
                
                        </div>
                        <input type="text" className='form-control' onKeyDown={handleSubmit} />
                </div>
            </div>
        </div>
    </div>
  )
}
