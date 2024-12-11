// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Filip",
    middleName: "",
    lastName: "Stevanovic",
    message: " Passionate about changing the world with technology. ",
    icons: [{
            image: "fa-github",
            url: "https://github.com/stevanovicc",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/filip-stevanovic-b31230293/",
        },
    ],
};


const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/profilepicture.jpeg"),
    imageSize: 375,
    message: "Motivated and detail-oriented junior web developer with a strong foundation in coding and problem-solving. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React.js. Experienced in building responsive, user-friendly web interfaces and dynamic applications. Familiar with backend technologies like Node.js and programming languages including Java, enhancing my ability to collaborate across the full stack. Passionate about creating clean, efficient code and continuously learning to improve development skills.",
    resume: "https://drive.google.com/file/d/1xe3KnjJ0gyqboRS9Ku9eF2yPQrJB3QVL/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "stevanovicc",
    reposLength: 4,
    specificRepos: [],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [{
            img: require("../editable-stuff/profilepicture.jpeg"),
            label: "First slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: require("../editable-stuff/profilepicture.jpeg"),
            label: "Second slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ],
    imageSize: {
        width: "615",
        height: "450"
    }
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "React", value: 90 },
        { name: "HTML/CSS", value: 85 },
        { name: "Data Structures", value: 70 },
        { name: "C/C++", value: 55 },
        { name: "JavaScript", value: 90 },
        { name: "Node.js", value: 80 },
        { name: "Java", value: 55 },
        { name: "SQL", value: 10 },
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
    message: "I'm currently looking for full-time Software Engineering or Web Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "fstevanovic2003@gmail.com",
};

const experiences = {
    show: false,
    heading: "Experiences",
    data: []
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };