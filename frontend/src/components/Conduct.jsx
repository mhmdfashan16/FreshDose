import React, { useState } from 'react'
// import nodemailer from 'nodemailer';

const Conduct = () => {

    const [email, seTEmail]=useState('');
    const [name, setName]= useState('')
   

// const transporter = nodemailer.createTransport({
//   host: 'smtp.smtp.dev',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'YOUR_SMTP_DEV_USERNAME',
//     pass: 'YOUR_SMTP_DEV_PASSWORD',
//   },
// });

// const sendMail = async () => {
//   await transporter.sendMail({
//     from: 'test@yourdomain.com',
//     to: 'receiver@test.com',
//     subject: 'Test Email from smtp.dev',
//     text: 'This is a test email sent through smtp.dev',
//   });

//   console.log('Email sent to smtp.dev inbox!');
// };

// sendMail();


  return (
    <div className='mt-10 pl-20 pr-20' id='conductUS'>
        <hr className='text-gray-500'/>
       <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Have a question about your prescriptions, deliveries, or need help? We’re here to assist you.
      </p>

      <form className="grid grid-cols-1 gap-6">
        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="email"
          value={email}
        onChange={(e)=>seTEmail(e.target.value)}
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>

        <button
          type="submit"
          className="bg-black/50 text-white py-2 px-4 rounded-md hover:bg-black/60 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-500">
        Or reach us directly at: <span className="text-gray-500">mhmdfshn16@gmail.com</span>
      </div>
    </div>

    </div>
  )
}

export default Conduct

