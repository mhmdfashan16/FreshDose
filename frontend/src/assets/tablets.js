import tablet_01 from '../assets/tablet_01.jpg'
import tablets_img from '../assets/tablets_img.jpg'


const tablets = [
  {
    name: "Paracetamol",
    brand: "Calpol",
    use: "Fever, Pain relief",
    strength: "500mg",
    price: 20,
    description: "Used to reduce fever and relieve mild to moderate pain.",
    category: "Non-Infection Diseases",
    image: tablets_img,
  },
  {
    name: "Amoxicillin",
    brand: "Mox",
    use: "Bacterial Infections",
    strength: "250mg",
    price: 45,
    description: "Broad-spectrum antibiotic used for treating bacterial infections.",
    category: "Infection Diseases",
    image: tablets_img,
  },
  {
    name: "Ibuprofen",
    brand: "Brufen",
    use: "Pain relief, Inflammation",
    strength: "400mg",
    price: 30,
    description: "Used for pain, fever, and inflammation.",
    category: "Non-Infection Diseases",
    image: tablets_img,
  },
  {
    name: "Cetirizine",
    brand: "Zyrtec",
    use: "Allergy, Sneezing",
    strength: "10mg",
    price: 15,
    description: "Relieves allergy symptoms like sneezing, runny nose.",
    category: "Respiratory Diseases",
    image: tablets_img,
  },
  {
    name: "Pantoprazole",
    brand: "Pantocid",
    use: "Acidity, GERD",
    strength: "40mg",
    price: 35,
    description: "Reduces stomach acid; used for acidity and acid reflux.",
    category: "Digestive System Disorders",
    image: tablets_img,
  },
  {
    name: "Azithromycin",
    brand: "Azithral",
    use: "Infections",
    strength: "500mg",
    price: 60,
    description: "Antibiotic for respiratory and skin infections.",
    category: "Infection Diseases",
    image: tablets_img,
  },
  {
    name: "Metformin",
    brand: "Glycomet",
    use: "Type 2 Diabetes",
    strength: "500mg",
    price: 25,
    description: "Used to control high blood sugar in people with type 2 diabetes.",
    category: "Hormonal Disorders",
    image: tablets_img,
  },
  {
    name: "Losartan",
    brand: "Losar",
    use: "Blood Pressure",
    strength: "50mg",
    price: 28,
    description: "Used to treat high blood pressure and protect the kidneys from damage.",
    category: "Cardiovascular Diseases",
    image: tablets_img,
  },
  {
    name: "Montelukast",
    brand: "Montair",
    use: "Asthma, Allergy",
    strength: "10mg",
    price: 22,
    description: "Prevents asthma and allergy symptoms by blocking leukotrienes.",
    category: "Respiratory Diseases",
    image: tablets_img,
  },
  {
    name: "Dolo 650",
    brand: "Micro Labs",
    use: "Fever, Body Pain",
    strength: "650mg",
    price: 18,
    description: "Common over-the-counter tablet used for fever and body pain relief.",
    category: "Non-Infection Diseases",
    image: tablets_img,
  }
];

export const tabletCategories = [
  {category: "Infection Disease",
    image:tablets_img
  },
  {category: "Non-Infection Disease",
     image:tablets_img
  },
  {category: "Mental and Neurological Disorder",
 image:tablets_img
  },
  {category: "Cancers",
     image:tablets_img
  },
  {category: "Hormonal Disorder",
     image:tablets_img
  },
  {category: "Respiratory Diseases",
     image:tablets_img
  },
  {category: "Cardiovascular Diseases",
     image:tablets_img
  },
  {category: "Digestive System Disorders",
    image:tablets_img
  }
];


export default tablets