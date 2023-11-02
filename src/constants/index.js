import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer and Maintainer",
    icon: web,
  },
  {
    title: "Penetration Tester",
    icon: mobile,
  },
  {
    title: "System Administration",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "NOC Engineer",
    company_name: "Smartnet Networks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2022 - To-Date",
    points: [
      "Provided customer service support to both users and clients.",
      "Monitored Customer services through the use of monitoring tools.",
      "Engaged with customers for service improvement.",
      "Collaborated with engineers and project managers regarding the parameters of client projects.",
      "Liaised with necessary teams to coordinate prompt and comprehensive repairs.",
      "Responded to calls and web chats within target time frames and conducted both remote and physical troubleshooting.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "FindiT Technologies Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - December 2022",
    points: [
      "Developing and maintaining web applications using PHP Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated with customers to identify and resolve issues.",
      "Performed system testing and troubleshooting, documenting issues and resolutions.",
      "Assisted in designing, coding, testing, deploying, maintaining, enhancing, and supporting company software systems.",
      "Worked as part of a small software development team using agile development processes and working in a cross-functional team environment.",
      "Worked with business customers in translating requirements into plans and specifications.",
    ],
  },
  {
    title: "IT Networking & Security",
    company_name: "ZAMCOL",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2019 - Dec 2020",
    points: [
      "Maintaining web applications and LMS & CMS.",
      "Recommend improvements in security systems and procedures to clients and management.",
      "Educated and trained users on information security policies and management",
      "Maintaining a constant level of availability to the servers by patching, updating, and restarting them",
      "Resolved issues for servers, desktops, and laptop configurations",
      "Maintained a comprehensive inventory of hardware and software for all company servers, laptops, and mobile devices",
      "Managed the IT infrastructure in the department, including network and server hardware, security updates, OS patches, drivers, and BIOS flash.",
      "Provided tech support for customers in the IT department and provided security training to employees.",
      "Prepared client and user reports in line with client services.",
    ],
  },
  {
    title: "IT Support Officer",
    company_name: "Zambezi Boarding School",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2019 - August 2019",
    points: [
      "Maintained School IT Infrastructure.",
      "Taught programming to pupils.",
    ],
  },
];

const testimonials = [
  /*{
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "React Movie App",
    description:
      "Web-based platform that allows users to search, and view latest trending movies and view info rating about the movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".NET & C#",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Desire01/interview-coding-challenge",
  },
  {
    name: "Nkwazi Magazine",
    description:
      "Online version of the Magazine that enables people to keep up to date with latest articles and stories.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress CMS",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS & JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://nkwazimagazine.com/",
  },
  {
    name: "Memory Card Game",
    description:
      "As part of the Geo-Retro Team we created a web and PC based matching game to test the player memory. Rating the user based on the number of moves they make. Used as an Educative Aid for Kids to help sharpen their memory and also to help teach them about Earth and Space through images.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS & JS",
        color: "green-text-gradient",
      },
      {
        name: ".NET, C# & Unity ",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://georetro.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
