export const SITE = {
  name: "Ekhlaku Rahman",
  role: "Full-Stack Developer",
  location: "Delhi NCR, India",
  phone: "+91 9065605144",
  email: "mohdrahman0yt@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ekhlaku-rahman-836b802b3/",
  github: "https://github.com/EKHLAKU-RAHMAN",
  tagline:
    "I build fast, accessible web experiences with React, Next.js, and Node.js.",
  summary:
    "Full-Stack Developer with experience in React, Next.js, Node.js. Skilled in REST APIs, database design, and performance optimization. Passionate about clean code and real-world problem solving.",
} as const;

export const education = [
  {
    title: "Bachelor of Computer Application",
    period: "2023 – 2026",
    place: "Muzaffarnagar",
  },
  {
    title: "Intermediate (12th Grade)",
    period: "2023",
    place: "East Champaran Bihar",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Zalima Development Pvt. Ltd.",
    period: "Jan 2026 – April 2026",
    highlights: [
      "Contributed to full-stack features across the product",
      "Collaborated on REST APIs and database workflows",
    ],
  },
];

export const projects = [
  {
    title: "CareerForge-Pro",
    description:
      // "Internship management system to streamline applications, tracking, and employer workflows.",
      "CareerForge-Pro is a full-stack AI-powered career optimization platform designed to help job seekers build, analyze, and improve their resumes using intelligent automation. ",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/EKHLAKU-RAHMAN",
    demo: "#contact",
  },
  {
    title: "Hostel Management System",
    description:
      "Designed and developed a website with integrated ERP for managing students , attendance, complaints, wardens and mess.",
    stack: ["React.js", "AI APIs", "Mongo DB"],
    github: "https://github.com/EKHLAKU-RAHMAN",
    demo: "#contact",
  },
  {
    title: "YJ-Glow Enterprises",
    description: "web application for YJ Glow Enterprises - an Electrical & Security Service Provider in India.",
    stack: ["Next.js", "Tailwind",],
    github: "https://github.com/EKHLAKU-RAHMAN",
    demo: "#contact",
  },
  
  {
    title: "Mehandi Services",
    description: "Mehandi booking platform for local artisans and customers.",
    stack: ["HTML/CSS", "JavaScript",],
    github: "https://github.com/EKHLAKU-RAHMAN",
    demo: "#contact",
  },
  {
    title: "The Guru Classes",
    description: "Educational platform for online learning and course management.",
    stack: ["HTML/CSS", "JavaScript","MongoDB", "Node.js"],
    github: "https://github.com/EKHLAKU-RAHMAN",
    demo: "#contact",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Bootstrap", level: 78 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "C / C++", level: 70 },
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];