// async function getUserData() {
//     try {
//         const response = fetch(
//         "https://jsonplaceholder.typicode.com/users", {
//             headers: {
//                 Authorization: 
//                 "Bearer lba_cZJYqoKgtFL2c_htDU79pW_GyR7b5DW6RvuHuh1bc18"
//             }
//         }
//     )
//     .then((res) => res.json())
//     .then(({ blogs }) => {
//     document.getElementById("blog-list").innerHTML = blogs
//     .map((b) => `<li><a href="[link removed]{b.slug}">${b.title}</a></li>`)
//     .join("");

//     .then((response) => (await response).json())
//     .then((data) => {
//         const blogs = data.blogs;
//         console.log(blogs);
//     });

//     if (!response.ok) {
//         throw new Error("Could not get users");
//     }

//     blogs.map((blog) => {
//         return `<li>${blog.title}</li>`;
//     });

//     const renderLink = (b) => `
//     <li>
//     <a href="https://jsonplaceholder.typicode.com/users${b.slug}">
//     ${b.title}
//     </a>
//     </li>
//     `;

//     document.getElementById("blog-list").innerHTML = blogs.map((b) => `<li>${b.title}</li>`)
//     .join("");

//     const data = await response.json();

//     // console.log(typeof(data));
//     console.log(data);
//     console.log(data[0].name);
//     }
//     catch(error) {
//     console.log("Error: ", error.message);
//     }
// }

// getUserData();





// const API_KEY = "lba_cZJYqoKgtFL2c_htDU79pW_GyR7b5DW6RvuHuh1bc18";

// fetch("https://true-blogger-api.app/api/v1/blogs", {
// headers: { Authorization: "Bearer ", API_KEY },
// })
// .then((res) => res.json())
// .then(({ blogs }) => {
// document.getElementById("blog-list").innerHTML = blogs
// .map((b) => `<li><a href="https://true-blogger-api.app/blogs/${b.slug}">${b.title}</a></li>`)
// .join("");
// });



const API = "https://true-blogger-api.app/api/v1/";
const API_KEY = "lba_cZJYqoKgtFL2c_htDU79pW_GyR7b5DW6RvuHuh1bc18";
const url = `${API}blogs`;

// async function getData() {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Request failed.");
//         }
//         const data = await response.json();
//         console.log(data);
//         } catch (error) {
//             console.log("Error:", error.message);
//     }
// }


 async function getBlogs() {
     try {
         const response = await fetch(`${API}blogs`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
         });
         if(!response.ok){
            throw new Error(`Request failed: ${response.status}`);
         }

         const { blogs } = await response.json();
         console.log(blogs);
     } 
     catch(error){
         console.log("Error: ", error.message);
     }
 }
 getBlogs();

 