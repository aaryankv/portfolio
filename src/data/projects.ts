export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Sales Forecasting System",
    description:
      "Implemented an LSTM model in Keras to predict sales trends, enabling data-driven decisions and improved business strategy through accurate forecasting.",
    tags: ["Python", "Keras", "TensorFlow", "LSTM", "Data Science", "Time Series"]
  },
  {
    title: "Automatic Face Attendance System",
    description:
      "Built a real-time facial recognition attendance system using CNN, OpenCV, and ML to boost accuracy and efficiency in tracking.",
    tags: ["Python", "OpenCV", "CNN", "Machine Learning", "Computer Vision"]
  },
  {
    title: "Banking Management System",
    description:
      "Designed a secure web app with PHP and MySQL for customer and employee account management with responsive UI.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Web App"]
  },
  {
    title: "CloudStream Ticketing Solutions",
    description:
      "Deployed a cloud-based chatbot using Dialogflow and Firestore to create/track support tickets with webhook-driven interactions.",
    tags: ["Dialogflow", "Firestore", "Cloud", "Webhooks", "Chatbot"]
  }
];
