import Rick_and_Morty from "../../assets/Rick-and-Morty.png";
import NABIJASH from "../../assets/Nabijash.png";
import wiki_dogs from "../../assets/wiki-dogs.png"


export const principalProjects = [
    {
        name: "NABIJASH",
        description: "A platform designed for improve the conection between students of the bootcamp soy Henry and companies, this allows them to carry out an intership in exchange for the final project, providing support to projects and work experience to students, promoting their career",
        features: ["connect with cloudinary", "Payment gateway with stripe", "Authentication", "combined filters", "mails notification", "renderizado condicional", "Dashboards", "charts", "responsive"],
        technologies: ["TypeScript", "Node.js", "Express", "mongoose", "React", "Redux", "MaterialUI", "Chart.js", "Stripe"],
        src: NABIJASH,
        repository: ["https://github.com/AlexLopez16/PF-HENRY-API", "https://github.com/AlexLopez16/PF-HENRY-CLIENT"]
    },
    {
        name: "Wiki-dogs",
        description: "Develop a SPA for visualizing different race of dogs, where you can filter by temperament, by weight, by height and by alphabetical order, also the client can serach by the name, and know more about the dog",
        features: ["Landing", "Loader", "SearchBar", "Combined filters and ordering", "Pagintae", "Details of dog", "Form of cretion"],
        technologies: ["javascript", "Node.js", "Express", "sequqlize", "PostgreSQL","React", "Redux", "CSS"],
        src: wiki_dogs,
        repository: 'https://github.com/Amparo-E/wiki-dogs'
    },
    {
        name: "Rick and Morty",
        description: "an application that consumes data from an api through GraphQL, listing the characters in two columns and in a paginated way, giving the possibility to choose one of each and compare the episodes they have in common",
        features: ["Landing page", "differentiated paging", "section to compare"],
        technologies: ["TypeScript", "Rest API", "React", "zustand", "MaterialUI"],
        src: Rick_and_Morty,
        repository: 'https://github.com/Amparo-E/Rick-and-Morty-app'
    },

]