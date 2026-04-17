import {
  FaClock,
  FaUserCheck,
  FaShieldAlt,
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaUniversity,
} from "react-icons/fa";

// Export icons as named exports for components to use
export {
  FaClock,
  FaUserCheck,
  FaShieldAlt,
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaUniversity,
};

// Data without JSX - just string references
export const faqs = [
  {
    id: 1,
    question: "What are the school hours and academic calendar?",
    answer:
      "School hours are from 8:00 AM to 2:30 PM, Monday through Friday. The academic year advance from September to June, with winter and spring breaks. Detailed academic calendars are available on our parent's portal.",
    icon: "FaClock",
    category: "General",
  },
  {
    id: 2,
    question: "What is the admission process and required documents?",
    answer:
      "Our admission process includes application submission, entrance assessment, parent's meeting and document verification. Required documents include birth certificate, previous school records and parent's identification.",
    icon: "FaUserCheck",
    category: "Admissions",
  },
  {
    id: 3,
    question: "What safety and security measures are in place?",
    answer:
      "We have 24/7 security personnel, CCTV surveillance, secure entry systems, emergency response protocols, regular safety drills and strict visitor management policies to ensure student and staff safety at all times.",
    icon: "FaShieldAlt",
    category: "Safety",
  },
  {
    id: 4,
    question: "What extracurricular activities are offered?",
    answer:
      "We offer a wide range of extracurricular activities including sports, arts, drama, debate, robotics, coding clubs, community service and various student-led initiatives.",
    icon: "FaBook",
    category: "Activities",
  },
  {
    id: 5,
    question: "How is academic progress communicated to parents?",
    answer:
      "We communicate through quarterly report cards, parent-teacher conferences, progress reports, digital parent portal access and regular email updates on student performance.",
    icon: "FaFileAlt",
    category: "Communication",
  },
  {
    id: 6,
    question: "Is there a school uniform policy?",
    answer:
      "Yes, we have a designated school uniform for all students. Uniform details, including seasonal variations and purchase information, are provided during admission.",
    icon: "FaCalendarAlt",
    category: "General",
  },
  {
    id: 10,
    question: "What technology resources are available to students?",
    answer:
      "Our campus features smart classrooms, high-speed internet, digital libraries, educational software subscriptions and online access to LMS(Classter).",
    icon: "FaGraduationCap",
    category: "Facilities",
  },
  {
    id: 12,
    question: "What is the school's homework policy?",
    answer:
      "Homework is designed to reinforce classroom learning with age-appropriate assignments. We follow guidelines ensuring homework is meaningful, manageable and supports learning objectives.",
    icon: "FaBook",
    category: "Academics",
  },
  {
    id: 13,
    question: "How can parents get involved in school activities?",
    answer:
      "Parents can join the Parent-Teacher Association, volunteer for events, participate in workshops, attend school functions and contribute through various committees and initiatives.",
    icon: "FaUsers",
    category: "Community",
  },
  {
    id: 15,
    question: "What is the procedure for early pickup or late arrival?",
    answer:
      "Parents must notify the school office in advance for early pickups. For late arrivals, students should report to the office with a valid reason note from parents.",
    icon: "FaClock",
    category: "Procedures",
  },
  // --- Naye Add Kiye Gaye Questions ---
  {
    id: 16,
    question: "What documents are required for admission?",
    answer:
      "Based on the registration checklist, the following documents are required: 1) Signed form received, 2) Signed T&C, 3) Student's Picture, 4) Picture of Father's/Guardian's CNIC, 5) Picture of birth certificate (if available) / Valid Form-B[cite: 11], 6) Picture of last school certificate and 7) Picture of deposit slip.",
    icon: "FaFileAlt",
    category: "Admissions",
  },
  {
    id: 17,
    question:
      "When is the deadline for paying monthly fees, and are fees refundable?",
    answer:
      "All tuition fees and applicable charges must be paid on or before the 5th of each month[cite: 15]. Fees paid to APS Premier are generally non-refundable. Admission and registration fees are strictly non-refundable[cite: 19].",
    icon: "FaCalendarAlt",
    category: "General",
  },
  {
    id: 18,
    question: "Can my child leave the school premises during school hours?",
    answer:
      "No, students shall not be released from APS Premier premises during school hours without verified parental authorisation and proper handover[cite: 28]. No student may leave APS Premier premises unless accompanied by authorised staff or a parent/guardian[cite: 49].",
    icon: "FaShieldAlt",
    category: "Safety",
  },
  {
    id: 19,
    question: "What happens in case of a medical emergency?",
    answer:
      "In case of illness or medical emergency, APS Premier is authorised to arrange immediate medical attention[cite: 66]. APS Premier shall make reasonable efforts to inform parents/guardians without delay[cite: 67]. All medical expenses incurred shall be the responsibility of the parent/guardian[cite: 68].",
    icon: "FaShieldAlt",
    category: "Safety",
  },
  {
    id: 20,
    question: "What is the policy on wearing jewelry or makeup?",
    answer:
      "Students must wear the prescribed APS Premier uniform neatly and completely[cite: 51]. Jewellery, make-up, or non-uniform items are not permitted unless expressly approved[cite: 52].",
    icon: "FaUserCheck",
    category: "General",
  },
];

export const categories = [
  "All",
  "General",
  "Admissions",
  "Academics",
  "Safety",
  "Facilities",
  "Activities",
];

export const contactInfo = [
    {
        icon: 'clock',
        title: "Visit Office",
        detail: "29 C 17 Circular Road, University Town, Peshawar, Pakistan, 25000",
        description: "Appointments recommended"
    }
];

// Icon mapping object
export const iconMap = {
  FaClock: FaClock,
  FaUserCheck: FaUserCheck,
  FaShieldAlt: FaShieldAlt,
  FaGraduationCap: FaGraduationCap,
  FaBook: FaBook,
  FaUsers: FaUsers,
  FaCalendarAlt: FaCalendarAlt,
  FaFileAlt: FaFileAlt,
  FaUniversity: FaUniversity,
};
