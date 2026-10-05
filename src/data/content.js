/* ============================================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO. No other file needs to change.

   Add an entry = copy one block, paste it under the others, change the text.
   Newest first is the order you want it shown on the page.

   CERTIFICATE IMAGES (optional)
     1. Drop the image in  public/certificates/   e.g. public/certificates/mern.jpg
     2. Set  image: "/certificates/mern.jpg"  on that certificate.
     Clicking a card with an image opens it full screen.
   ========================================================================== */

export const experience = [
  {
    role: "Front-End Software Engineering Job Simulation",
    org: "Skyscanner (Forage)",
    period: "Sep 2026",
    type: "Virtual experience",
    points: ["Built a Backpack React web app, applying component-based front-end development practices."],
    tags: ["React", "Backpack"],
  },
  {
    role: "Venture Capital Job Simulation",
    org: "H2 Ventures (Forage)",
    period: "Sep 2026",
    type: "Virtual experience",
    points: ["Completed tasks in investment selection, startup valuation, and startup growth analysis."],
    tags: ["Valuation", "Growth analysis"],
  },
  // { role: "Your role", org: "Company", period: "Jan 2027 - Present", type: "Internship",
  //   points: ["What you built or achieved."], tags: ["React", "Node.js"] },
];

export const certificates = [
  {
    title: "Full Stack Web Development",
    detail: "MERN, REST APIs, Database Design",
    issuer: "UI Learning Computer Institute, Karachi",
    date: "Issued 30 Nov 2024",
    status: "completed", // "completed" or "in-progress"
    image: "", // e.g. "/certificates/mern.jpg"
    link: "", // optional verify URL
  },
  {
    title: "Kaggle Micro-Courses",
    detail: "Python, Pandas, Intro to ML, Data Visualization, Feature Engineering, Model Validation",
    issuer: "Kaggle",
    date: "2024",
    status: "completed",
    image: "",
    link: "",
  },
  { title: "Flutter Development", detail: "", issuer: "e-Skills", date: "In progress", status: "in-progress", image: "", link: "" },
  { title: "AWS Cloud Computing", detail: "", issuer: "Honhaar Jawan", date: "In progress", status: "in-progress", image: "", link: "" },
  { title: "AWS Certified DevOps", detail: "", issuer: "Honhaar Jawan", date: "In progress", status: "in-progress", image: "", link: "" },
  { title: "CompTIA Security+", detail: "", issuer: "Honhaar Jawan", date: "In progress", status: "in-progress", image: "", link: "" },
];

export const skills = [
  { name: "Languages", items: ["JavaScript", "Java", "Python", "C", "C++", "SQL"] },
  { name: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap", "GSAP", "Three.js", "HTML5", "CSS3"] },
  { name: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Axios"] },
  { name: "Databases", items: ["MongoDB", "Mongoose", "MySQL", "Schema Design", "Indexing"] },
  { name: "Tools", items: ["Git", "GitHub", "Postman", "Linux", "Netlify", "VS Code"] },
  { name: "Data & ML", items: ["Pandas", "NumPy", "Scikit-learn", "Data Viz"] },
];

export const projects = [
  { title: "Food Delivery Platform", description: "Restaurant listings, menus, cart, order management and delivery tracking, with a restaurant dashboard and an admin panel on role-based interfaces.", stack: ["React", "Node.js", "Express", "MongoDB"], github: "https://github.com/Azfarmoin", live: "" },
  { title: "Social Media Platform", description: "Posts, likes, comments, follows, profiles, search and image uploads, with real-time notifications and JWT-secured sessions and routes.", stack: ["React", "Node.js", "MongoDB", "JWT"], github: "https://github.com/Azfarmoin", live: "" },
  { title: "Expense Tracker", description: "Income and expenses by category with budgets, spending charts, analytics, automated monthly reports and exportable transactions.", stack: ["React", "Node.js", "Express", "MongoDB"], github: "https://github.com/Azfarmoin", live: "" },
  { title: "EduTrack", description: "Attendance management system built from scratch: full backend, React frontend, a grading module, MongoDB Atlas and deployment configuration.", stack: ["MERN", "MongoDB Atlas"], github: "https://github.com/Azfarmoin", live: "" },
  { title: "AttendX", description: "Student attendance and grade management in two builds: a Java Swing desktop app and a MERN version with a gamified XP and leveling dashboard.", stack: ["MERN", "Java Swing"], github: "https://github.com/Azfarmoin", live: "" },
];
