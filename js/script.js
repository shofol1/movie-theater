fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>setPosts(data));


const setPosts = posts=>{
    console.log(posts);
    const postContainer=document.getElementById('post-container');
    posts.forEach(post=>{
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="post p-5 bg-light border border-primary border-3 m-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p>post id :${post.id}</p>
        </div>
        `
        postContainer.appendChild(div);
    })
}