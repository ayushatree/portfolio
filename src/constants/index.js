const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0.5, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Ayush brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Web Development Intern",
    date: "October 2025 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  // {
  //   review: "Ayush’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review: "Ayush’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Shadab Ali",
    mentions: "@shadabali",
    review:
      "Ayush did a great job on our website. He understood our requirements clearly and delivered a smooth, working solution. He was always ready to solve problems and improve things.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Tushar Chauhan",
    mentions: "@tusherchauhan",
    review:
      "It was really nice working with Ayush. He updated our old website and made it modern and easy to use. His focus on quality and details was impressive.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Surya Srivastava",
    mentions: "@suryasrivastava",
    review:
      "Ayush is very professional and dedicated to his work. He completed the project on time and always showed interest in making the website better. Great experience overall.",
    imgPath: "/images/client2.png",
  },
  {
    name: "NishiKant Solanke",
    mentions: "@nishiKantsolanke",
    review:
      "Ayush helped us redesign our website and the result was clean and user-friendly. He was easy to communicate with and very supportive throughout the project.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Pratik Rathore",
    mentions: "@pratikrathore",
    review:
      "Ayush has good knowledge of web development. He delivered a strong and reliable website for us, and we are happy with the performance and overall result.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Kunal Patil",
    mentions: "@kunalpatil",
    review:
      "Ayush understood our needs very well and created a website that matched our expectations. His frontend skills are strong and his work quality is excellent.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "github",
    url:"https://github.com/ayushatree",
    imgPath: "/images/github1.png",
  },
  {
   name: "insta",
    url:"https://www.instagram.com/ayush_atre_/",
    imgPath: "/images/insta.png",
  },
  {
    name: "x",
     url:"https://x.com/ayush_atre_10",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
     url:"https://www.linkedin.com/in/ayushatre/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};