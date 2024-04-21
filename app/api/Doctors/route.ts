
export interface Idoctors {
    name: string;
    specialization: string;
    timings: string;
    education: string;
    image:string;
  }

const doctors :Idoctors[]=[
    {
        "name": "Dr. Aisha Khan",
        "specialization": "Pediatrics",
        "timings": "Monday to Friday",
        "education": "MBBS from Karachi Medical University",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Usman Ahmed",
        "specialization": "Cardiology",
        "timings": "Tuesday and Thursday",
        "education": "MD in Cardiology from Lahore Medical College",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Sarah Malik",
        "specialization": "Dermatology",
        "timings": "Monday to Saturday",
        "education": "MBBS from Islamabad Medical University",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. William Harris",
        "specialization": "Orthopedics",
        "timings": "Monday, Wednesday, Friday",
        "education": "MD in Orthopedics from Oxford Medical School",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
        
    },
    {
        "name": "Dr. Yasir Raza",
        "specialization": "Neurology",
        "timings": "Tuesday and Thursday",
        "education": "MBBS from Peshawar Medical College",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Emma Thompson",
        "specialization": "Psychiatry",
        "timings": "Monday to Friday",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "education": "MD in Psychiatry from Cambridge Medical School"
    },
    {
        "name": "Dr. Hassan Ali",
        "specialization": "Ophthalmology",
        "timings": "Monday, Wednesday, Friday",
        "education": "MBBS from Quetta Medical University",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Sofia Khan",
        "specialization": "Gynecology",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Tuesday and Thursday",
        "education": "MD in Gynecology from Karachi Medical College"
    },
    {
        "name": "Dr. Richard Wilson",
        "specialization": "Oncology",
        "timings": "Monday to Friday",
        "education": "MD in Oncology from Edinburgh Medical School",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Fatima Ahmed",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "specialization": "Internal Medicine",
        "timings": "Monday, Wednesday, Friday",
        "education": "MBBS from Lahore Medical University"
    },
    {
        "name": "Dr. James Anderson",
        "specialization": "Pediatrics",
        "timings": "Tuesday and Thursday",
        "education": "MD in Pediatrics from London Medical College",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Sana Aslam",
        "specialization": "Endocrinology",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Monday to Friday",
        "education": "MBBS from Rawalpindi Medical School"
    },
    {
        "name": "Dr. Daniel Walker",
        "specialization": "Urology",
        "timings": "Monday, Wednesday, Friday",
        "education": "MD in Urology from Manchester Medical University",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Mariam Khan",
        "specialization": "Pulmonology",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Tuesday and Thursday",
        "education": "MBBS from Karachi Medical University"
    },
    {
        "name": "Dr. John Hughes",
        "specialization": "Cardiac Surgery",
        "timings": "Monday to Friday",
        "education": "MD in Cardiac Surgery from Birmingham Medical School",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Samina Malik",
        "specialization": "Neurosurgery",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Monday, Wednesday, Friday",
        "education": "MBBS from Islamabad Medical College"
    },
    {
        "name": "Dr. Edward Clarke",
        "specialization": "Psychiatry",
        "timings": "Monday to Friday",
        "education": "MD in Psychiatry from Liverpool Medical College",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Farah Hussain",
        "specialization": "Obstetrics",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Tuesday and Thursday",
        "education": "MBBS from Lahore Medical College"
    },
    {
        "name": "Dr. Robert Turner",
        "specialization": "Gastroenterology",
        "timings": "Monday, Wednesday, Friday",
        "education": "MD in Gastroenterology from Glasgow Medical School",
        "image":"https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg"
    },
    {
        "name": "Dr. Ayesha Asad",
        "specialization": "Nephrology",
        "image": "https://static.vecteezy.com/system/resources/previews/015/715/522/original/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg",
        "timings": "Monday to Friday",
        "education": "MBBS from Karachi Medical University"
    }
]

export const GET = async () => {
    return new Response(JSON.stringify(doctors));
}