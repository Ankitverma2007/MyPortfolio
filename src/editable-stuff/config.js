// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ankit",
  middleName: "",
  lastName: "Verma",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Ankitverma2007",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/people/Ankit-Verma/100014320121563/?mibextid=LQQJ4d",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/___ankitverma____/?next=%2F____ankitverma____%2F",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ankit-verma-bb7252187/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/jackson_denial",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://drive.google.com/file/d/1QdyCqdb1HmGeXCpVe3rg1y414QIbrKKz/view?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ankit2.jpg"),
  imageSize: 375,
  message:
    "I'm a Web Developer aspiring to gain a full-time position in a reputed company. Gained extensive experience in web development, and deployment . A highly motivated and hardworking individual skilled in Node JS, React JS. Seeking a position to utilize the gained skills and experience to positively contribute to the company.",
  resume: "https://drive.google.com/file/d/1QdyCqdb1HmGeXCpVe3rg1y414QIbrKKz/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Ankitverma2007", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["IMDb-React-application ","AboutBooks-React-JS ","NewsApplicationReact-js ","Live-video-streaming","TextEditor-React ","quora ","WebChatApplication ","InfosFinalProjFrontend","weather-web-application","Music-Player ","OtpGenetarorAndAuthintication "],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ankit2.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ankit2.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "ReactJs", value: 65 },
    { name: "NodeJs", value: 80 },
    { name: "JavaScript", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "MongoDb", value: 85 },
    { name: "NodeMailer", value: 65 },
    { name: "BootStrap v5,3", value: 90 },
    { name: "Figma", value: 80 },
    { name: "Netlify", value: 95 },
    { name: "Heroku", value: 95 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ankitvermarapu@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Backend Developer(Node JS)',// Here Add Company Name
      companylogo: require('../assets/img/lokdesh.jpeg'),
      companyname: 'Lokdesh Pvt Ltd',
      date: 'July 2022 – Present',
    },
    {
      role: 'Developer Intern', // Here Add Company Name
      companylogo: require('../assets/img/HPE.jpg'),
      companyname: 'Hewlett Packard Enterprise',
      date: '',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
