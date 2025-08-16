const navLinks = [
  {
    name: "Summary",
    link: "#summary",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Practice",
    link: "#practice",
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
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/new/logos/html.png",
  },
  {
    imgPath: "/new/logos/css.png",
  },
  {
    imgPath: "/new/logos/next.png",
  },
  {
    imgPath: "/new/logos/react.png",
  },
  {
    imgPath: "/new/logos/js.png",
  },
  {
    imgPath: "/new/logos/mui.png",
  },
  {
    imgPath: "/new/logos/node.png",
  },
  {
    imgPath: "/new/logos/postgresql.png",
  },
  {
    imgPath: "/new/logos/ts.png",
  },
  {
    imgPath: "/new/logos/redux.png",
  },
  {
    imgPath: "/new/logos/tailwind.png",
  },
  {
    imgPath: "/new/logos/stripe.png",
  },
  {
    imgPath: "/new/logos/reactnative.png",
  },
  {
    imgPath: "/new/logos/prisma.png",
  },
  {
    imgPath: "/new/logos/docker.png",
  },
  {
    imgPath: "/new/logos/express.png",
  },
  {
    imgPath: "/new/logos/figma.png",
  },
  {
    imgPath: "/new/logos/firebase.png",
  },
  {
    imgPath: "/new/logos/framer.png",
  },
  {
    imgPath: "/new/logos/go.png",
  },
  {
    imgPath: "/new/logos/graphql.png",
  },
  {
    imgPath: "/new/logos/mysql.png",
  },
  {
    imgPath: "/new/logos/reactquery.png",
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
    review:
      "In new team, I joined a project built from scratch and had the opportunity to learn a lot, such as how to analyze business requirements, design system architecture, optimize database performance, and implement automated CI/CD for the product.",
    // imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "DeK Technologies – Full Stack Developer",
    date: "07/2024 - Present",
    project: " CarCare – Car Maintenance Management Application ( 7 members)",
    responsibilities: [
      "Designed UX/UI and implement additional functionalities (both back-end and front-end) based on the requirements of stackehoders.",
      "Reviewing code from other members of team to ensure quality. Refactor, write unit tests and documentation to help help onboard developers faster and easier.",
      "collaborate  with the team leader to define and improve the team’s workflow, which decreases time to deploy new functionality.",
    ],
  },
  {
    review:
      "Here, I've experienced several outsourcing projects and learned a lot, such as how to flexibly manage projects according to client requirements, optimize workflows to ensure efficiency and quality, and problem-solving skills under high pressure while collaborating with stakeholders across multiple time zones.",
    // imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "DeK Technologies – Full Stack Developer",
    date: "  06/2022 - 06/2024",
    project: " 3+ projects (Local Food Order, Event ticket sale, School Management System) (12 members)",
    responsibilities: [
      "Haved chance to define the architecture and coding convention, set up CI/CD system for whole front-end and back-end in some projects.",
      "Designed UX/UI, Develope features according to requirements and wrote unit/integration tests to ensure functionality and maintainability.",
      "Maintaining legacy system. Refactoring code, and re-architecting the monolith service into many micro-services.",
      "Handling some core problems like Race condition, Preventing overselling, Group order, Optimize search, Atomic data, Real-time data sync.",
    ],
  },
  {
    review:
      "Thanks to this project, which was my first real-world project after graduation, I gained a clear understanding of the actual workflow, from requirement gathering, professional team collaboration, and efficient source code management, to the testing and product deployment process—something I hadn't deeply experienced in an academic setting.",
    // imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "BookingCare Technology –  Full Stack Developer",
    date: "05/2021 - 06/2022",
    project: " Booking Care (6 members) is an online medical appointment booking application",
    responsibilities: [
      "Build features and improvements based on the roadmap.",
      "Reviewing code for other team members to ensure code quality and maintainability.",
      "Write unit tests, document. Fix bugs and maintain legacy system to run smoothly.",
    ],
  },
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
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
