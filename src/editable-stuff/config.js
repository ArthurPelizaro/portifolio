// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arthur",
  middleName: "",
  lastName: "Pelizaro",
  message: " Desenvolvedor Júnior amante da tecnologia. ",
};

const about = {
  show: true,
  heading: "Sobre mim",
  imageLink: require("../editable-stuff/teste.png"),
  imageSize: 375,
  message:
    "Meu nome é Arthur e sou um desenvolvedor júnior com foco em back-end e front-end. Atualmente, estou cursando o último semestre do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal do Triângulo Mineiro - CAMPUS ITUIUTABA, com previsão de formatura em dezembro de 2023.",
  resume: "https://1drv.ms/b/s!AuzOQJix8_8ZhFHfPGycJXr358YY?e=8zZdep",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projetos Recentes",
  gitHubUsername: "ArthurPelizaro",
  reposLength: 4,
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/teste.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/teste.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"600",
    height:"420"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Habilidades",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "MySQL/PostgreSQL/SQL", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "PHP", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Bootstrap", value: 80 },
    { name: "React/React-native", value: 75 },
    { name: "Node ", value: 85 },
    { name: "Spring Boot", value: 85 },
    { name: "Inglês ", value: 85 },
    { name: "Espanhol", value: 75 },
    { name: "Pacote Office", value: 90 },
  ],
  softSkills: [
    { name: "Responsabilidade", value: 100 },
    { name: "Comprometimento", value: 100 },
    { name: "Positividade", value: 75 },
    { name: "Adaptabilidade", value: 85 },
    { name: "Solução de problemas", value: 87 },
    { name: "Empatia", value: 90 },
    { name: "Organização", value: 80 },
    { name: "Criatividade", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Entre em contato",
  message:
    "Entre em contato para saber mais sobre minhas habilidades e experiências",
  message2:
    "Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos e habilidades.",
  email: "arthurpelizaro@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
