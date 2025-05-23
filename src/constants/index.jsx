import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  // { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,";

export const PROJECTS = [
  {
    id: 1,
    title: "Flavoro-Food Website",
    description:
      "Flavoro - The food ordering app made with reactjs (using vite), tailwindcss and redux toolkit.",
    imgSrc: project1,
    link: "https://flavoro-food-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Xora - A SaaS landing page with modern UI",
    description:
      "Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles..",
    imgSrc: project2,
    link: "https://xora-bo7q.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://portfolio-aryan-three.vercel.app/",
  },
  {
    id: 4,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    imgSrc: project4,
    link: "https://yoom-three-tawny.vercel.app/",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to organize and prioritize work.",
    imgSrc: project5,
    link: "https://example.com/task-management-tool",
  },
  {
    id: 6,
    title: "Animated Apple iPhone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    imgSrc: project6,
    link: "https://apple-three-psi.vercel.app",
  },
  // {
  //   id: 7,
  //   title: "Fitness Tracker",
  //   description: "A mobile application to track fitness activities and goals.",
  //   imgSrc: project7,
  //   link: "https://example.com/fitness-tracker",
  // },
  // {
  //   id: 8,
  //   title: "Recipe App",
  //   description: "An app for browsing and saving various cooking recipes.",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "Weather Dashboard",
  //   description:
  //     "A weather dashboard providing current weather data and forecasts.",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
 "As a passionate Blockchain Developer specializing in Solana, I focus on building decentralized, secure, and high-performance applications on the blockchain. With a strong foundation in both on-chain and off-chain development, I create scalable smart contracts using Rust and Anchor while integrating them seamlessly with modern web technologies like React and Node.js. I’m experienced with Web3, Solana RPCs, wallet integrations, and token economics. My expertise extends to backend systems using MongoDB and SQL, ensuring full-stack proficiency. I'm committed to continuous learning and actively follow cutting-edge blockchain advancements to build innovative and future-ready decentralized solutions.";

export const EXPERIENCES = [
  {
    company: "Google",
    role: "Software Engineer",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Facebook",
    role: "Frontend Developer",
    year: "01/2021 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];



export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/users/ghostrider0575", // Discord profile link
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/_aryan_dagar001?igsh=MWlmcjR2Y3pxYWNhaA==",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/aryan007-bot",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aryan-dagar-5b7a761b1",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];


export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "aryandagar715@gmail.com",
  phone: "+91 9213960958",
};
