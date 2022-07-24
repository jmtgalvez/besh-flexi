import React, {useContext, useEffect, useState, useRef} from 'react'
import ChatContent from './ChatContent';
import './Chat.css'
import * as ApiChat from '../api/chat';
import * as ApiUsers from '../api/users';
import { UserContext } from '../UserContext';

export default function Chat () {
    const { user } = useContext(UserContext);
    const [content, setContent] = useState([]);
    const [followed, setFollowed] = useState([]);
    const [sendTo, setSendTo] = useState();
    const [conversationData, setConversationData] = useState([]);
    const scrollEndRef = useRef();

    useEffect(()=>{
        ApiUsers.getAllUsers().then(response =>{
            setFollowed([...response.data.users]);
        })
    }, [])

    const handleSendTo = async ev =>{
        setSendTo(ev.target.id)
    }

    console.log(conversationData)
    console.log(sendTo)
    const handleContent = ev =>{
        setContent(ev.target.value)
    }
    
    const handleSubmit = async ev =>{

        if (ev.key === 'Enter'){
            const chatData = {
                content: content,
                user_id: user.user_id,
                receiver_id: sendTo
            }
            await ApiChat.sendChat(chatData)
            .then(response =>{
                console.log(response)
                console.log(response.data.chat_id)
            })
            
            setContent('')

        }
    }
    useEffect(()=>{
        const conversation = {
            sender_id: user.user_id,
            receiver_id: sendTo
        }

        ApiChat.getConversation(conversation)
        .then(response=>{
            if(response.status === 200){
                setConversationData([...response.data.conversation])
            }
        })
        scrollEndRef.current?.scrollIntoView();
    },[content, sendTo])

    const displayFollowedUsers = [...followed].map(user => <FollowedUser user_id={user.user_id} name={`${user.last_name}, ${user.first_name}`}
    sendTo={sendTo} handleSendTo={handleSendTo}  receiver_id={user.sender_id}/>)
    const displayConversation = [...conversationData].map(data =>
    
    <Conversation name={data.username} sender_id={data.sender_id}
    content={data.content} sendTo={sendTo} user_id={user.user_id} />)

    return (
        <div className="card chat-container">
            
            <div className="card-body row">
                <div className="col-sm-4 d-flex justify-content-center followed_user p-2">
                        <div className="card p-2 w-100">
                            
                            {displayFollowedUsers}
                        
                        </div>
                </div>
                <div className="chatbox">
                    <div className="col-sm-8 p-2 conversation">

                        {displayConversation}
                        <div ref={scrollEndRef}>
                        </div>

                    </div>
                </div>
                
                <div className="footer">
                    <div className='footer_col_1'>
                            
                    </div>
                    <div className="footer_col_2">
                        <input
                            type="text"
                            placeholder='Chat' 
                            value={content} 
                            onChange={handleContent}
                            className='form-control p-2' 
                            onKeyDown={handleSubmit}
                            />

                    </div>
                    
                </div>
            </div>
            
        </div>
  )
}

function FollowedUser({user_id, name, handleSendTo, sendTo, receiver_id}){
    console.log(sendTo + user_id)
    return(
        <div className='followed_user_list px-2'>
            <a className={sendTo == user_id ? 'active':''} id={user_id} key={user_id} onClick={handleSendTo}>{name}</a>
        </div>
    )
}


function Conversation ({name, content, sender_id, user_id}){
    return(
        <div id={sender_id} className={sender_id == user_id ? 'chat_content px-4 sender': 'chat_content px-4'}>
            
            <p id={sender_id} className='p-1'>{sender_id == user_id ? content : name}</p>
            <p id={sender_id} className='p-1'>{sender_id == user_id ? 'You' : content}</p>

        </div>
    )
}