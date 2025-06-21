// controllers/chatbotController.js
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import axios from 'axios';
import User from '../models/User.js';
dotenv.config();

//Chat with deepInfra

export const chatWithDeepInfra = async (req, res) => {
  const { message } = req.body;

  // Static or dynamic personal data (can come from DB or token)
    const userContext = {
      name: "A.S Auto Motors Customer",
      company: "A.S Auto Motors",
      location: "Sri Lanka",
      interest: "second-hand bikes, promotions, and customer support"
    };

 const fullPrompt = `
    You are a helpful AI assistant for **FreshDose**, an online pharmacy and doctor consultation platform aiming to serve customers with healthcare products, prescriptions, and medical guidance.

    **Platform Features**:
    - Order prescription and over-the-counter medicines online
    - Upload prescriptions for doctor validation
    - Get professional **doctor consultations** through chat
    - Home delivery available for verified orders
    - Accepts both cash on delivery and online payment
    - Chatbot is available 24/7 for support

    **User Info**:
    - Role: General public, patient, or guardian
    - Location: Likely in Sri Lanka
    - Needs: Medicine availability, price inquiries, prescription upload help, consultation timing, delivery info, payment options

    **User asked**: ${message}

    **Your Goal**:
    Respond as a **friendly and knowledgeable pharmacy assistant**. Be polite, concise, and guide the user to the correct action or next step.

    **Tone**:
    - Professional, caring, and trustworthy
    - Avoid jargon, keep it user-friendly
    - If you don't know an answer, recommend contacting a human rep or scheduling a doctor consultation
`;



  try {
    const response = await axios.post(
      'https://api.deepinfra.com/v1/openai/chat/completions',
      {
        model: 'meta-llama/Meta-Llama-3-8B-Instruct',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: fullPrompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPINFRA_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0]?.message?.content || "No response.";
    //Update user chat history
    const token = req.cookies.userToken;
        if (!token) return res.status(401).json({ success: false, message: 'No token provided' });
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const userId = decoded.id;

    await User.findByIdAndUpdate(userId, {
      $push:{
        chatHistory:[
          {
            message:message,
            sender:'user',
            timestamp:new Date()
          },
          {
            message: reply,
            sender:'bot',
            timestamp: new Date()
          }
        ]
      }
    })
    res.status(200).json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

