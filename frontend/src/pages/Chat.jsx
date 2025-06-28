import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
// import message from '../assets/chatMessage'
// import conversation from '../assets/message';
import { useNavigate } from 'react-router';
import { useStoreContext } from '../context/StoreContext';
import { useRef } from 'react';
import axios from 'axios';


const Chat = () => {
  const navigate = useNavigate();
  const {setShowChatBot, user} = useStoreContext();


  const [conversation, setConversation] = useState([ 
    {
    sender: "chatbot",
    message: "Hey there! This is Shan Pharmacy Store. How can I help you?",
    timestamp: Date.now()
  }]);

      //Retreive user chat history from user database
    useEffect(() => {
      const fetchHistory = async () => {
        try {
          // const { data } = await axios.get(`http://localhost:5000/api/chat/history`,{withCredentials:true});
          if (user) {
            setConversation(user.chatHistory);
           
          } else {
            // If no history, fall back to welcome message
            setConversation([
              {
                sender: "chatbot",
                message: "Hey there! This is Shan Pharmacy Store. How can I help you?",
                timestamp: Date.now()
              }
            ]);
          }
        } catch (err) {
          console.error("Error fetching messages:", err.message);
          setConversation([
            {
              sender: "chatbot",
              message: "Hey there! This is Shan Pharmacy Store. How can I help you?",
              timestamp: Date.now()
            }
          ]);
        }
      };

      fetchHistory();
    }, [user]);


  const [inputMessage, setInputMessage] = useState('');


  //for Scroll
  const bottomRef = useRef(null);

  const handleSendMessage = async () => {
  if (!inputMessage.trim()) return;

  const newMessage = {
    sender: 'user',
    message: inputMessage
  };

  // 1. Show user's message
  setConversation(prev => [...prev, newMessage]);

  const userMessage = inputMessage;

  // 2. Clear input
  setInputMessage('');

  // 3. Show "Thinking..." message immediately
  const thinkingMessage = {
    sender: 'chatbot',
    message: 'Thinking...'
  };
  setConversation(prev => [...prev, thinkingMessage]);

  try {
    // 4. Send request
    const { data } = await axios.post('/api/chat/chat', {
      message: userMessage
    });

    // 5. Replace "Thinking..." with real response
    if (data.success) {
      setConversation(prev => [
        ...prev.slice(0, -1), // remove "Thinking..."
        {
          sender: 'chatbot',
          message: data.reply
        }
      ]);
    } else {
      setConversation(prev => [
        ...prev.slice(0, -1),
        {
          sender: 'chatbot',
          message: "Sorry something went wrong."
        }
      ]);
    }

  } catch (error) {
    console.error(error.message);
    setConversation(prev => [
      ...prev.slice(0, -1),
      {
        sender: 'chatbot',
        message: 'Error reaching server. Please try again.'
      }
    ]);
  }
};

  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };



  useEffect(()=>{
 
      if(bottomRef.current){
        bottomRef.current.scrollIntoView({behaviour:'smooth'});
      }
  
  },[conversation])

  return (
    <div  className='fixed bg-black/80 z-1 top-0 right-0 left-0 bottom-0 pl-20 pr-20 pt-10 pb-20 flex justify-center'>
  
     <div className='w-4xl absolute top-10 rounded-2xl'>
  {/* Header */}
  <div className='flex items-center justify-between p-5 bg-black text-white rounded-t-2xl'>
    <h1 className='text-xl font-bold'>Pharmacy Bot</h1>
    <img
      src={assets.delete_icon}
      alt=""
      className='w-10 h-10 opacity-80 cursor-pointer'
      onClick={()=>setShowChatBot(false)}
    />
  </div>

  {/* Scrollable message area */}
  <div className='bg-gray-500 pt-4 h-120 pb-4 max-h-120 overflow-y-auto'>
    {
      conversation.map((message, index) => (
        <div key={index} className={message.sender === "bot" ? "text-left pl-4" : "text-right flex justify-end"}>
          <div className={message.sender === "bot" ? "w-fit pr-4" : "flex flex-col w-fit pr-4 items-end"}>
            {
              message.sender === "bot"
                ? <img src={assets.chatBot_icon} alt="" className='w-10 h-10' />
                : <img src={assets.user_icon} alt="" className='w-10 h-10 items-center' />
            }
            <p
              className={message.sender === "bot"
                ? "bg-black/20 p-2 ml-10 max-w-2xl rounded-xl text-gray-200 rounded-tl-none"
                : "bg-black/20 p-2 mt-1 mr-8 max-w-2xl rounded-xl text-gray-200 rounded-tr-none"}
            >
              {message.message}
            </p>
          </div>
        </div>
      ))
    }
    <div ref={bottomRef}></div>
  </div>

  {/* Input */}
  <div className='bg-black text-white p-5 rounded-b-2xl'>
    <div className='flex items-center gap-5 bg-gray-400 rounded-full'>
      <input
        type="text" 
        value={inputMessage}
        onChange={(e)=>setInputMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
        className='w-3xl rounded-full p-3 border-0 text-gray-800'
      />
      <img
        src={assets.send_icon}
        alt=""
        className='ml-5 w-6 h-6 items-center cursor-pointer'
      />
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Chat
