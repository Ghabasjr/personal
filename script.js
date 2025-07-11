const projects = [
  {
    title: "CropnCarry",
    description: "A responsive ecommerce web app for agricultural produce.",
    link: "https://www.cropncarry.com/"
  },
  {
    title: "SyncLearning",
    description: "A digital learning platform for schools, built with React.",
    link: "https://sync-learnin.vercel.app/"
  },
  {
    title: "Hng",
    description: "E commerce.",
    link: "https://e-commerce-rouge-xi.vercel.app/"
  }
];

const galleryImages = [
    "pictures/picture1.jpg",
    "pictures/picture2.jpg",
    "pictures/picture3.jpg",
    "pictures/picture4.jpg",
    "pictures/Yelwee.jpg",
    
];

const galleryGrid = document.getElementById("gallery-grid");
galleryImages.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Gallery Image";
    galleryGrid.appendChild(img);
    }
);
const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});

