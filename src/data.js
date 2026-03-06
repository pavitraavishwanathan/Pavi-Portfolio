import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/python.png";
import Tools3 from "/assets/tools/github.png";
import Tools4 from "/assets/tools/mysql.png";
import Tools5 from "/assets/tools/numpy.png";
import Tools6 from "/assets/tools/colab.png";
import Tools7 from "/assets/tools/pandas.png";
import Tools8 from "/assets/tools/opencv.png";
import Tools9 from "/assets/tools/jupyter.png";
import Tools10 from "/assets/tools/tensorflow.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Python",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Git Hub",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "My SQL",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Numpy",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Google Colab",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Pandas",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Open CV",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Jupyter",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Tensor Flow",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "MuteMate – Sign Language Detection",
    subtitle: "Real-time sign language recognition system using Computer Vision.",
    fullDescription:
      "MuteMate is a real-time Indian Sign Language recognition system built using MediaPipe, OpenCV, and TensorFlow. The system detects hand gestures using computer vision techniques and converts them into readable text and speech. This project helps improve communication accessibility for hearing and speech-impaired individuals.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/pavitraavishwanathan/Sign_language_detection_project",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "PlantDoc – Plant Disease Detection",
    subtitle: "Machine learning model for plant disease detection.",
    fullDescription:
      "PlantDoc is a machine learning-based plant disease detection system that analyzes leaf images using Convolutional Neural Networks (CNN). The system helps farmers detect plant diseases early and take preventive actions to protect crops and improve agricultural productivity.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Restaurant Recommendation System",
    subtitle: "Data-driven recommendation system built with Python.",
    fullDescription:
      "A restaurant recommendation system developed using Python and data analysis techniques. The system analyzes restaurant ratings, cuisine types, and location-based data to provide personalized recommendations to users.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription:"A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];
