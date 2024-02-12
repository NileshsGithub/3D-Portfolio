import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    CPP,
    html,
    css,
    reactjs,
    C,
    MYSQL,
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
    carrent1,
    jobit,
    tripguide,
    JAVA,
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: C,
    },
    {
      name: "CPP",
      icon: CPP,
    },
     {
      name: "JAVA",
      icon: JAVA,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MYSQL",
      icon: MYSQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Frontend Engineering Intern",
      company_name: "Qualtech Software PVT LTD ",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "July 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Writing clean, efficient, and well-documented code following industry best practices and coding standards.",
        "Implementing responsive design principles to ensure seamless user experiences across devices",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Java Development Intern",
      company_name: "Oasis Infobyte",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "March 2023 - April 2023",
      points: [
        "Crafting robust and scalable Java-based applications, ensuring their reliability and performance.",
        "Enforcing clean, efficient, and well-documented code practices, adhering to industry standards.",
        "Conducting rigorous testing and debugging to maintain the integrity of applications.",
        "Optimizing application performance and scalability through efficient coding practices.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Making coding tasks more enjoyable and productive! ",
      name: "Mahesh Mohite",
      designation: "Computer Science Engineer",
      // company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "Delivering tangible results with practical coding solutions!",
      name: "Afrid Pathan",
      designation: "Computer Science Engineer",
      // company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      testimonial:
        "Saving time and effort in everyday coding challenges!",
      name: "Aditya Chougale",
      designation: "Computer Science Engineer",
      // company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "A portfolio website to showcase your skills and accomplishments. With a minimalist design and easy-to-navigate layout, highlight your projects and experience effectively.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        { 
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Health App",
      description:
        "An Android application enabling users to seamlessly manage healthcare needs. Features include booking lab tests, ordering medicine, finding specialist doctors, and accessing health articles.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sqllite",
          color: "green-text-gradient",
        },
        {
          name: "android",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Quiz App",
      description:
      "A user-friendly web-based quiz app for testing knowledge across various topics. Engage in friendly competition with friends and track your progress effortlessly.With diverse quizzes to choose from, learning becomes enjoyable and interactive.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };