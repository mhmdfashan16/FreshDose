import React from 'react'
import doctors from '../assets/doctors'
import assets from '../assets/assets'

const Doctors = () => {

  const rating=()=>{
    for(let i=0; i<=5;i++){
      return <img className='w-7 h-7' src={assets.star_icon}/>
    }
  }

  return (
    <div className='pl-30 pr-20 pt-10'>
  
    <h1 className='text-2xl font-bold mb-10'>All Doctors</h1>
    {
    doctors.map((doctor, index)=>(
        <div className="flex gap-10 max-w-7xl  mb-10  p-6 bg-white rounded-xl shadow-md text-gray-800" key={index}>
        
        <img src={doctor.photo} alt={doctor.name} className="w-50 rounded-lg mb-4" />
        <div className='flex flex-col gap-0'>
        <div>
        <h2 className="text-2xl font-semibold ">{doctor.name}</h2>
        <p className=" text-sm text-gray-500">{doctor.specialization}</p>
        <p className="mt-2 text-sm">{doctor.description}</p>
        </div>
        <ul className="mt-4 text-sm space-y-1">
            <li><strong>Qualification:</strong> {doctor.qualification}</li>
            <li><strong>Experience:</strong> {doctor.experience}</li>
            <li><strong>Languages:</strong> {doctor.languages.join(', ')}</li>
            <li><strong>Consultation Fee:</strong> {doctor.consultationFee}</li>
            <li><strong>Available For:</strong> {doctor.availableFor.join(', ')}</li>
            <li><strong>Contact:</strong> {doctor.contact.email}</li>
      </ul>

    </div>
 
    <div className=''>

    </div>
        


    </div>            
    ))
    }
    </div>

  )
}

export default Doctors
