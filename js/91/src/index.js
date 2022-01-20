
(async function () {

    let docDiv = document.getElementById('users');
    async function fetchUsers() {
        console.log('hi');
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();

        users.forEach(user => {
            let y = document.createElement('div');
            y.setAttribute("id", `${user.id}`)
            y.setAttribute("class", "bloggers")
            y.append(`Name: ${user.name}     Website: ${user.website}`);

            userListener(y);
            docDiv.append(y);
        });

        function userListener(user) {
            user.addEventListener("click", function () {
                getPost(user)
            })
        };
    }
    fetchUsers();


    async function getPost(user) {
        let responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let posts = await responsePost.json();

        for (i = 0; i < 3; i++) {
            let title = document.createElement('h3');
            title.setAttribute("class", "posts")
            title.append(`Post #${i + 1}:  Title: ${posts[i].title}`)
            let docDiv2 = document.getElementById('users');
            docDiv2.append(title);

            let postDiv = document.createElement('div');
            postDiv.setAttribute("class", "posts")
            postDiv.append(` Body:${posts[i].body} `)

            docDiv2.append(postDiv);
            function postListener(title) {
                title.addEventListener("click", function () {
                    getComments(posts);
                })
            };
            let showButton = document.createElement('button');
            //     showButton.setAttribute("id", `${post.id}`)
            showButton.setAttribute("class", "button")
            showButton.innerText = "Show Comments";
            postDiv.append(showButton);
            showButton.addEventListener('click', function () {
                getComments(posts);
            })
        }
        async function getComments(posts) {
            let commentsPost = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[1].id}`);
            let comments = await commentsPost.json();
            for (i = 0; i < comments.length; i++) {
                let commentDiv = document.createElement('div');
                commentDiv.setAttribute("class", "comments")
                commentDiv.append(` Comments:${comments[1].body} `)


                let docDiv3 = document.getElementById('users')
                docDiv3.append(commentDiv);
            }
        }

    };
})();