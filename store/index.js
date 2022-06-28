import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "MySpace: A lifestyle management app",
      category: "Web Application",
      img: "images/myspace-notes.png",
      publishDate: "May 16, 2022",
      tag: "Python, FastAPI, MongoDB, Javascript, VueJS",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "To create a better lifestyle with the app. And to make sure user can track everything of his/her life.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Story of \"MySpace\"",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "MySpace Dashboard",
          img: "../images/myspace-dashboard.png",
        },
        {
          id: uuidv4(),
          title: "MySpace User Profile",
          img: "../images/myspace-user.png",
        },
        {
          id: uuidv4(),
          title: "MySpace Money Manager Category",
          img: "../images/myspace-category.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Ashraful Islam (Myself)",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Custom Software Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://ashraful.dev",
        },
        {
          id: uuidv4(),
          title: "Email",
          details: "ashrafulrobin3@gmail.com",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "MongoDB",
        "JavaScript",
        "VueJS",
        "Vuetify",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I was thinking of making note application like Google keep. So, I started working. After few days my Todo part was completed. So, I thought why not add more modules like, money manager to I can track of it. And then I have re designed the UI, System Design part and so many other things. Finally I could manage my money properly with the application. Eventually I am adding more features."
        },
        {
          id: uuidv4(),
          details:
            "There was so many challanges during development and some are still challenge to fix. I managed the frontend state(data) with vuex. The UI designed was done with Vuetify(A Material Design VueJS Framework). On the backend part I used FastAPI(Python Async Framework) and as a database I used MongoDB. Mongo is hosted on the Mongo Atlas and The application server is hosted on DigitalOcean with a single droplet. I've tried to scale the application as I could."
        },
        {
          id: uuidv4(),
          details:
            "The app has following features," +
            "<ul class='ml-8 list-disc'>" +
            "<li>Add Note</li>" +
            "<li>Update Note</li>" +
            "<li>Archieve Note</li>" +
            "<li>Plain Text, Markdown, Checklist types Note supported</li>" +
            "<li>Email send from the note</li>" +
            "<li>Note labeling</li>" +
            "<li>Add image to note</li>" +
            "<li>Adding multiple wallet</li>" +
            "<li>Wallet amount auto adjust</li>" +
            "<li>Parent/Child Category</li>" +
            "<li>Transaction support with photo, date, wallet, category and others</li>" +
            "<li>User invitation</li>" +
            "<li>User invitation requests</li>" +
            "<li>Highly configurable from UI</li>" +
            "</ul>"
        }
      ],

    },

    {
      id: "260d1271-f1f2-4bc9-a5eb-asdsadasds",
      title: "Barati Cable Network",
      category: "Web Application",
      img: "images/web-project-2.jpg",
      publishDate: "November 25, 2019",
      tag: "Python, Django, PostgreSQL, Javascript, VueJS",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails: "To manage employee, day to day bill collection, complain register, connection management and customer management.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Story of \"Barati Cable Network\"",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "BaratiCN Customer Details",
          img: "../images/baraticn-1.jpg",
        },
        {
          id: uuidv4(),
          title: "BaratiCN Role",
          img: "../images/baraticn-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Barati Cable Network Ltd.",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Local Cable and Internet Provider",
        },
        {
          id: uuidv4(),
          title: "Address",
          details: "Mirzapur, Tangail, Dhaka, Bangladesh",
        },
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "JavaScript",
        "VueJS",
        "Vuetify",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "<strong>Barati Cable Network</strong> has their 1000+ customers to manage. They have Cable TV and Broadband internet both. The system was designed to manage customers, collect bills, Identify the connection type of customer, Complain registerer from remote area. Customer Login. They was overall happy to get the system."
        },
        {
          id: uuidv4(),
          details:
            "The app has following features," +
            "<ul class='ml-8 list-disc'>" +
            "<li>Customer Registration</li>" +
            "<li>Customer Dashboard</li>" +
            "<li>Bill Collection</li>" +
            "<li>Bill adjustment</li>" +
            "<li>Role based permission system.</li>" +
            "<li>Handling a huge number of transactions.</li>" +
            "<li>Complain register from the customer end</li>" +
            "<li>Assign complain to employee (Field Agent type employee)</li>" +
            "<li>Everyone can create a complain ticket</li>" +
            "<li>Only admin can manage permission from the UI.</li>" +
            "<li>Highly configurable from UI</li>" +
            "</ul>"
        }
      ],

    },
  ],
  clientsHeading: "Whom I've worked with",
  clients: [
    {
      id: uuidv4(),
      title: "Field Buzz",
      img: "../brands/fieldbuzz.png",
      url: "https://field.buzz"
    },
    {
      id: uuidv4(),
      title: "Vivasoft Ltd.",
      img: "../brands/vivasoft.png",
      url: "https://www.vivasoftltd.com/"
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "<strong>Mohammad Ashraful Islam</strong><br/>Senior Software Engineer at <a target='_blank' href='https://vivasoftltd.com'>Vivasoft Ltd.</a>"
    },
    {
      id: uuidv4(),
      bio: "A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills."
    },
    {
      id: uuidv4(),
      bio: "I have 6+ years of professional expeience of Python, Django, Javascript. I do customize project/system for individual/company."
    },
    {
      id: uuidv4(),
      bio: "Beside everything else, I am a motor bike lover and traveller. I love to travel accross the world."
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/iashraful",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/_ashraful",
    },
    {
      id: uuidv4(),
      name: "Dev.to",
      icon: "book",
      url: "https://dev.to/ashraful",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/__ashraful",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "server",
      name: "Server Deployment",
    },
    {
      id: uuidv4(),
      value: "desktop",
      name: "Desktop Application",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
