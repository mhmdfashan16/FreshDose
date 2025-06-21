import doctor_img from '../assets/doctor.jpg'

const doctors=[
  {
    "name": "Dr. Ayesha Nazeer",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (Internal Medicine)",
    "experience": "8+ years",
    "languages": ["English", "Tamil", "Sinhala"],
    "location": "Colombo, Sri Lanka",
    "timings": "Mon - Fri: 10:00 AM to 5:00 PM",
    "consultationFee": "Rs. 1,200",
    "description": "Experienced physician treating fever, infections, blood pressure, and general health issues with a patient-first approach.",
    "contact": {
      "phone": "+94 77 123 4567",
      "email": "ayesha@yourpharmacy.com"
    },
    "availableFor": ["Video Consultation", "General Health Advice"],
    "photo": doctor_img
  },
  {
    "name": "Dr. Ravi Mahendran",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (Dermatology)",
    "experience": "5+ years",
    "languages": ["English", "Sinhala"],
    "location": "Kandy, Sri Lanka",
    "timings": "Mon - Sat: 11:00 AM to 4:00 PM",
    "consultationFee": "Rs. 1,500",
    "description": "Skin specialist with expertise in acne, eczema, fungal infections, and skincare routines.",
    "contact": {
      "phone": "+94 76 456 7890",
      "email": "ravi.derma@yourpharmacy.com"
    },
    "availableFor": ["Skin Consultations", "Prescription Review"],
    "photo": doctor_img
  },
  {
    "name": "Dr. Nilusha Fernando",
    "specialization": "Pediatrician",
    "qualification": "MBBS, DCH (Child Health)",
    "experience": "10+ years",
    "languages": ["English", "Sinhala"],
    "location": "Galle, Sri Lanka",
    "timings": "Tue - Sat: 9:00 AM to 1:00 PM",
    "consultationFee": "Rs. 1,300",
    "description": "Child specialist focused on child development, vaccinations, and illness management in infants and kids.",
    "contact": {
      "phone": "+94 71 999 8888",
      "email": "nilusha@yourpharmacy.com"
    },
    "availableFor": ["Video Consultation", "Parent Advice"],
    "photo": doctor_img
  },
  {
    "name": "Dr. Hasan Fairooz",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD (Psychiatry)",
    "experience": "7+ years",
    "languages": ["English", "Tamil"],
    "location": "Jaffna, Sri Lanka",
    "timings": "Mon - Fri: 4:00 PM to 8:00 PM",
    "consultationFee": "Rs. 2,000",
    "description": "Mental health expert treating depression, anxiety, and sleep disorders with confidentiality and care.",
    "contact": {
      "phone": "+94 77 321 4560",
      "email": 'hasanfairoos16@gmail.com'
    },
    "availableFor": ["Mental Health Counseling", "Medication Advice"],
    "photo": doctor_img
  },
  {
    "name": "Dr. Sanduni Jayasuriya",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MS (Obstetrics and Gynaecology)",
    "experience": "9+ years",
    "languages": ["English", "Sinhala"],
    "location": "Negombo, Sri Lanka",
    "timings": "Mon - Fri: 9:00 AM to 3:00 PM",
    "consultationFee": "Rs. 1,800",
    "description": "Women's health specialist experienced in pregnancy care, menstrual issues, and hormonal treatments.",
    "contact": {
      "phone": "+94 75 112 3344",
      "email": "sanduni.gyno@yourpharmacy.com"
    },
    "availableFor": ["Women’s Health", "Family Planning Advice"],
    "photo": doctor_img
  }
]

export default doctors;


