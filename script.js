const url = `${API}blogs`;

async function getData() {
    try {
        const response = await fetch("/api/blogs");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
getData();


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

