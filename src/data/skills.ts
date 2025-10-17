export const skills = {
  programming: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  ai_ml: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "TensorFlow", "Keras"],
  data: ["Data Structures & Algorithms", "Pandas", "NumPy"],
  databases: ["MySQL", "MongoDB"],
  cloud: ["GCP", "AWS"],
  domains: ["Augmented Reality", "Virtual Reality"],
  tools: ["Git", "Docker", "Streamlit", "OpenCV", "Dialogflow", "MuleSoft", "Boomi"]
} as const;

export const languages = ["English", "Hindi", "Kannada", "Telugu"] as const;

export type Skills = typeof skills;
export type Languages = typeof languages;
