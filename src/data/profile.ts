export const profile = {
  name: "AARYAN K V",
  location: "Bengaluru, India 560040",
  phone: "+91-9886099660",
  email: "kvaaryan@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/aaryankv",
    github: "https://github.com/aaryankv"
  },
  summary:
    "Aspiring AI & ML Enthusiast | Problem Solver | Proficient in Java & Python | Experienced in AR/VR Projects | Skilled in Data Structures & Algorithms | Collaborative Team Player | Data Science Enthusiast | Dedicated to Building a Better Future for the World.",
  education: [
    {
      degree: "Bachelor of Technology: Artificial Intelligence & Machine Learning",
      institution: "B N M Institute Of Technology",
      location: "Bengaluru, India",
      details: "CGPA: 7.91/10"
    },
    {
      degree: "Class XII",
      institution: "Narayana PU College",
      location: "Bengaluru, India",
      details: "Final Grade: 82%"
    },
    {
      degree: "Class X, CISCE",
      institution: "Sri Vani Education Centre",
      location: "Bengaluru, India",
      details: "Final Grade: 80%"
    }
  ],
  certifications: [
    "PwC Launchpad — Cloud & Digital, PwC",
    "Strategy Formulation and Data Visualization, IIT M",
    "Build a natural language processing solution with Azure AI, Microsoft",
    "Build an Azure AI Vision solution, Microsoft",
    "PwC Internship Certificate",
    "eMpulse Global Internship Certificate"
  ],
  experience: [
    {
      role: "Associate Consultant",
      company: "Oracle",
      location: "Bengaluru",
      period: "Aug 2025 – Present",
      bullets: [
        "Implement, configure, and customize Oracle FLEXCUBE solutions for banking clients.",
        "Provide functional and technical support, troubleshoot issues, and ensure customer requirements are met effectively.",
        "Collaborate with cross-functional teams to deliver scalable and reliable solutions."
      ]
    },
    {
      role: "Advisory Intern",
      company: "PwC (PricewaterhouseCoopers)",
      location: "Bengaluru",
      period: "Feb 2025 – Aug 2025",
      bullets: [
        "Designed and implemented cloud and hybrid integration solutions using tools like Boomi and MuleSoft.",
        "Collaborated with cross-functional teams to deliver scalable integration workflows for enterprise clients."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "eMpulse Global",
      location: "Bengaluru",
      period: "Nov 2023 – Feb 2024",
      bullets: [
        "Built ML models for sales forecasting and computer vision using Python, TensorFlow, and Keras.",
        "Created interactive dashboards with Streamlit and streamlined data pipelines using Pandas and NumPy."
      ]
    },
    {
      role: "Front-End Web Developer Intern",
      company: "Learn-Street Software Solutions",
      location: "Bengaluru",
      period: "Oct 2023 – Dec 2023",
      bullets: [
        "Designed a responsive web application using HTML, CSS, Bootstrap, and JavaScript.",
        "Implemented JSON-based data handling and ensured cross-browser/device compatibility."
      ]
    }
  ]
} as const;

export type Profile = typeof profile;
