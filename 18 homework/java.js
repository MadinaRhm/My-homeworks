fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    const posts = document.getElementById("posts");
    const loading = document.getElementById("loading");

        loading.style.display = "none";


        data.forEach(post => {

            posts.innerHTML += `
                <div class="card">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <p>ID: ${post.id}</p>
                </div>
            `;

        });
        })

         .catch(error => {
        const loading = document.getElementById("loading");

        loading.textContent = "Something went wrong!";
    });