import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently training a YOLOv11 based object detection model to detect gallstones using gallbladder ultrasound images.",
    description: "AGDC: Automated Gallstone Detection and Classification",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "ElevateMe",
    des: "Automates problem-solving and root-cause analysis with ChatGPT, built on React.js and Django.",
    img: "/elevateme.JPG",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/fm.svg",
      "/mui.png",
      "/python.png",
      "/django.png",
    ],
    link: "https://elevateme-orpin.vercel.app/",
    sourceCode: "https://github.com/ErwinLambujon/ElevateMe-FrontEnd-Deployed",
  },
  {
    id: 2,
    title: "AGDC: Automated Gallstone Detection and Classification",
    des: "An AI-powered tool that leverages YOLOv11 to accurately detect and classify gallstones in ultrasound images.",
    img: "/ultrasound.jpg",
    iconLists: [
      "/streamlit.jpeg",
      "/ultralytics.png",
      "/collab.jpg",
      "/python.png",
    ],
    link: "https://agad-gallstone.streamlit.app/",
    sourceCode: "https://github.com/ErwinLambujon/Gallstone-Detection.git",
  },
  {
    id: 3,
    title: "Java Custom Interpreter",
    des: "DSL Interpreter: A Java-based engine for parsing and executing user-defined commands in automated workflows.",
    img: "/interpreter.jpg",
    iconLists: ["/intellij.png", "/java.png"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/sanidhyy/imaginify",
  },
  {
    id: 4,
    title: "Meta Graph API",
    des: "Meta Data Retrieval: Built a system using the Meta Graph API to aggregate messages for enterprise insights.",
    img: "/metaapi.jpeg",
    iconLists: ["/api.png", "/fastapi.png", "/meta.png"],
    sourceCode: "https://github.com/ErwinLambujon/MetaAPI",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a lending application for a client, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern at Carlo Felipe Consultancy",
    desc: "Assisted in the development of two web-based application using Next.js and Express.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Developer Intern at Ng Khai Development Corporation",
    desc: "Designed and developed web-based application that automates HR tasks with an AI-powered FAQ assistant for quick and accurate employee support.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title:
      "Software Developer/AI automation Intern at SparkSoft Solutions, Inc.",
    desc: "Contributed to the TaskWeaver project, an innovative code-first agent framework designed to seamlessly plan and execute data analytics tasks.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ErwinLambujon",
  },
  {
    name: "X",
    img: "/twit.svg",
    link: "https://x.com/erwin_lambujon",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/erwin-lambujon-950a39254/?originalSubdomain=ph",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript", "Python", "Django"],
  stack2: ["Tailwind CSS", "Framer Motion", "Three.js", "Radix UI", "Shadcn"],
  stack3: ["Vue.js", "AWS", "MySql", "PostgreSQL", "MongoDB"],
} as const;
