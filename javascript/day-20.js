// let arr = [
//   {
//     user: "Ravi",
//     age:30,
//     city:"mumbai"
//   },
//   {
//     user: "anuj",
//     age:20,
//     city:"delhi"
//   },
//   {
//     user: "aditya",
//     age:25,
//     city:"Gaya"
//   },
//   {
//     user: "Puskar",
//     age:40,
//     city:"kolkata"
//   },
//   {
//     user: "Manish",
//     age:60,
//     city:"bihar"
//   }
// ]
// let num=0;
// arr.forEach(function (elem) {
//   num+= elem.age
  
// })

// console.log(num);



let users = [
  {
    username: "Ravi Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Frontend Developer",
    description: "Passionate about creating modern and responsive websites.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    username: "Ananya Singh",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "I love designing simple and beautiful user experiences.",
    tags: ["Figma", "UI", "UX", "Design"]
  },

  {
    username: "Aditya Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Backend Developer",
    description: "Building scalable APIs and reliable backend systems.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },

  {
    username: "Priya Verma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    profession: "Data Scientist",
    description: "Turning data into useful insights using machine learning.",
    tags: ["Python", "ML", "Pandas", "Data"]
  },

  {
    username: "Manish Kumar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Full Stack Developer",
    description: "Developing complete web applications from frontend to backend.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"]
  }
];




let sum = '';

users.forEach(function (elem) {
  sum = sum+`  <div class="card">
    <img src=${elem.image} alt="">
    <h3>${elem.username}</h3>
    <h4>${elem.profession}</h4>
    <p>${elem.description}</p>
  </div>`
})

let main = document.querySelector('main')
main.innerHTML = sum