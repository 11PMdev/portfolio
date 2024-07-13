import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiPhp,
  SiCodeigniter,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiFigma
} from "react-icons/si";

export interface skillType {
  icon: IconType,
  name: string
}

export const stats = [
  {
    num: 7,
    text: "Years of experience"
  },
  {
    num: 10,
    text: "Projects completed"
  },
  {
    num: 5,
    text: "Technologies mastered"
  },
  {
    num: 523,
    text: "Code commits"
  }
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque dolor omnis!",
    url: "#"
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur corporis voluptates.",
    url: "#"
  },
  {
    num: "03",
    title: "Logo Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsum quod saepe magni.",
    url: "#"
  },
  {
    num: "04",
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime autem voluptate ullam!",
    url: "#"
  }
];

export const resumeTabs = [
  { value: "experience", name: "Experience", order: 1 },
  { value: "education", name: "Education", order: 2 },
  { value: "skills", name: "Skills", order: 3 },
  { value: "about-me", name: "About me", order: 4 },
]

export const aboutEjin = {
  title: "About me",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem alias quis enim laudantium unde, nemo accusantium beatae!",
  items: [
    { label: "Name", value: "Ejin N." },
    { label: "Phone", value: "(84) 899 222 323" },
    { label: "Experience", value: "7+ Years" },
    { label: "Nationality", value: "Vietnam" },
    { label: "Discord", value: "@ejindev" },
    { label: "Telegram", value: "@ejindev" },
    { label: "Email", value: "me@ejin.dev" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "English, Vietnamese" }
  ]
}

export const experience = {
  icon: "",
  title: "My experience",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nisi tempore voluptate, autem commodi veritatis earum suscipit adipisci!",
  items: [
    {
      company: "Hanbiro Inc.",
      position: "Full Stack Developer",
      duration: "2019 - Present"
    },
    {
      company: "SystemEXE Vietnam",
      position: "Java Developer",
      duration: "2018 - 2019"
    },
    {
      company: "Capgemini Vietnam",
      position: "Java Fresher",
      duration: "2017"
    }
  ]
}

export const education = {
  icon: "",
  title: "My education",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos illo sunt amet. Itaque, officia dolores accusantium recusandae earum corrupti quae minus maiores voluptates facere delectus ratione dicta dolorem qui.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development",
      duration: "2022 - 2023"
    },
    {
      institution: "Online Course",
      degree: "Front-end Course",
      duration: "2020 - 2021"
    },
    {
      institution: "Greenwich of University",
      degree: "Bachelor of Science - Computer Science",
      duration: "2013 - 2017"
    },
  ]
}

export const skills = {
  icon: "",
  title: "My skills",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae aspernatur nobis vel atque ipsa adipisci, obcaecati ipsam.",
  items: [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiHtml5, name: "HTML 5" },
    { icon: SiCss3, name: "CSS 3" },
    { icon: SiReact, name: "ReactJS" },
    { icon: SiNextdotjs, name: "NextJS" },
    { icon: SiTailwindcss, name: "TailwindCss" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiLaravel, name: "Larevel" },
    { icon: SiCodeigniter, name: "Codeigniter" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiFigma, name: "Figma" }
  ]
}
