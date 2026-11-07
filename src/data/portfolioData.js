import {
  FaCode,
  FaCloud,
  FaTools,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiZoho } from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const personalInfo = {
  name: "Devin Jaera",
  title: "Cloud Computing & Internet of Things | Web Designer | IT Support Specialist | ",
  bio: "I provide web, IT, hosting, and Zoho Mail administration support, including DNS and cPanel management, server troubleshooting, and email configuration.",
  about:
    "I hold a BSc in Cloud Computing & Internet of Things (Upper Second Class) from the University of Zimbabwe. I have hands-on experience building responsive web applications with React.js, alongside IT and hosting support, including DNS and cPanel management, server-side troubleshooting, and email setup. I am a certified Zoho Mail Administrator with skills in mailbox management, email security and deliverability, mail routing, and troubleshooting. I am passionate about software development, cloud systems, and practical IT solutions that solve real-world problems.",
  email: "mufarojay123@gmail.com",
  whatsapp: "+263 77 272 5467",
  cvLink:"/cv/Devin Jaera CV.pdf",
  github: "https://github.com/Gdevin77",
  linkedin: "https://www.linkedin.com/in/devin-jaera-651699246/"
};

export const skills = [
  {
    name: "React.js",
    icon: FaReact,
    details: [
      { title: "Reusable components", description: "Build interfaces from modular, reusable UI components." },
      { title: "Responsive interfaces", description: "Create layouts that adapt to different screen sizes." },
      { title: "Interactive UI", description: "Use props, state, and hooks to manage dynamic user experiences." }
    ]
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    details: [
      { title: "Interactive features", description: "Add behavior and interactions to web pages." },
      { title: "Asynchronous code", description: "Work with promises and async operations." },
      { title: "Application logic", description: "Handle events, data, and client-side application behavior." }
    ]
  },
  {
    name: "Node.js / Express",
    icon: FaNodeJs,
    details: [
      { title: "REST APIs", description: "Build server endpoints for web applications." },
      { title: "Routes & middleware", description: "Organize request handling and common server logic." },
      { title: "Backend integration", description: "Connect application services with data and frontend clients." }
    ]
  },
  {
    name: "Python",
    icon: FaPython,
    details: [
      { title: "Scripting", description: "Write scripts to automate tasks and process information." },
      { title: "Web development", description: "Use Python frameworks such as Flask to build web applications." },
      { title: "Problem solving", description: "Apply programming fundamentals to practical tasks." }
    ]
  },
  {
    name: "Cloud Computing",
    icon: FaCloud,
    details: [
      { title: "Cloud fundamentals", description: "Understand core cloud services and deployment concepts." },
      { title: "Cloud solutions", description: "Explore infrastructure and services for application needs." },
      { title: "Operations", description: "Consider reliability, security, and scalability in cloud environments." }
    ]
  },
  {
    name: "IT Support & Troubleshooting",
    icon: FaTools,
    details: [
      { title: "Issue diagnosis", description: "Investigate hardware, software, and connectivity problems." },
      { title: "Technical support", description: "Help users resolve common IT issues and restore service." },
      { title: "Resolution & follow-up", description: "Apply fixes and confirm systems are working as expected." }
    ]
  },
  {
    name: "Hosting Support",
    icon: FaCloud,
    details: [
      { title: "DNS management", description: "Manage domain DNS records and related configuration." },
      { title: "cPanel management", description: "Work with hosting settings and tools in cPanel." },
      { title: "Server troubleshooting", description: "Investigate and troubleshoot server-side issues." },
      { title: "Email configuration", description: "Set up and configure email accounts and services." }
    ]
  },
  {
    name: "Customer Management Certificate",
    icon: FaTools,
    description: "Awarded by CXAZ, August 2026."
  },
  {
    name: "Certified Zoho Mail Administrator",
    icon: SiZoho,
    details: [
      {
        title: "User & mailbox management",
        description: "Create accounts, set storage quotas, and manage aliases and distribution lists."
      },
      {
        title: "DNS & deliverability",
        description: "Configure MX, SPF, DKIM, and DMARC records to support reliable, secure email delivery."
      },
      {
        title: "Security & spam control",
        description: "Enforce two-factor authentication, set spam filters, and manage mail restrictions."
      },
      {
        title: "Mail routing & organization",
        description: "Configure transport rules, domain aliases, auto-responders, and team permissions."
      },
      {
        title: "Auditing & troubleshooting",
        description: "Review mail logs, investigate delivery issues, and manage retention and backup compliance."
      }
    ]
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    details: [
      { title: "Version control", description: "Track code changes and maintain project history with Git." },
      { title: "Branching & merging", description: "Organize development work and combine code changes." },
      { title: "GitHub collaboration", description: "Host repositories and share work through GitHub." }
    ]
  }
];

export const projects = [
  {
    title: "Employee Management System",
    description:
      "A role-based web platform for managing staff records, attendance, and internal workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/emp.png",
    live: "https://employee-nine-snowy.vercel.app/",
    github: "https://github.com/Gdevin77/employee"
  },
  {
    title: "Church Website Portal",
    description:
      "A content-driven church portal with event scheduling, announcements, and engagement features.",
    stack: ["React", "Tailwind", "Firebase"],
    image: "/images/youth.png",
    live: "#",
    github: "https://github.com/Gdevin77/youth"
  },
  {
    title: "Automated Attendance Management System",
    description:
      "A smart attendance tracking system designed to reduce manual errors and improve reporting.",
    stack: ["Python", "Flask", "SQL"],
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Automated+Attendance+System",
    live: "#",
    github: "#"
  },
  {
    title: "AUTONOVA - Automotive Key & ECU Solutions",
    description:
      "Autonova is a full-stack automotive service platform for booking and managing car services online.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    image: "/images/autonova.png",
    live: "#",
    github: "https://github.com/Gdevin77/autonova"
  }
];

export const services = [
  {
    title: "Web Application Development",
    description: "Building modern, scalable web apps with clean UI and robust backend integrations.",
    icon: FaLaptopCode,
    details: [
      { title: "Responsive user interfaces", description: "Create clean, accessible layouts for desktop and mobile." },
      { title: "Frontend development", description: "Build interactive web experiences using modern frontend tools." },
      { title: "Application integration", description: "Connect user interfaces to APIs and supporting services." }
    ]
  },
  {
    title: "System Development",
    description: "Designing and implementing tailored software systems for organizational workflows.",
    icon: FaDatabase,
    details: [
      { title: "Workflow-focused design", description: "Shape system features around practical organizational needs." },
      { title: "Application implementation", description: "Develop features that support everyday processes." },
      { title: "Data handling", description: "Organize and work with application data." }
    ]
  },
  {
    title: "IT Consultancy , Support & Technical Troubleshooting",
    description: "Diagnosing and resolving hardware/software issues to maintain smooth operations.",
    icon: FaTools,
    details: [
      { title: "Technical diagnosis", description: "Identify likely causes of hardware, software, and connectivity issues." },
      { title: "Support & troubleshooting", description: "Guide users through fixes and restore normal operation." },
      { title: "Practical recommendations", description: "Suggest clear next steps to improve day-to-day IT use." }
    ]
  },
  {
    title: "Cloud-Based Solutions",
    description: "Deploying and optimizing cloud-first services for performance, reliability, and growth.",
    icon: FaCloud,
    details: [
      { title: "Cloud service planning", description: "Match cloud capabilities to application and organizational needs." },
      { title: "Deployment support", description: "Assist with deploying services and applications in cloud environments." },
      { title: "Reliability considerations", description: "Account for security, performance, and scalability." }
    ]
  }
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaCode }
];
