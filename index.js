const userData = {
            "currentUser": {
                "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
            },
            "comments": [
                {
                "id": 1,
                "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
                "createdAt": "1 month ago",
                "score": 12,
                "user": {
                    "image": { 
                    "png": "./images/avatars/image-amyrobson.png",
                    "webp": "./images/avatars/image-amyrobson.webp"
                    },
                    "username": "amyrobson"
                },
                "replies": []
                },
                {
                "id": 2,
                "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
                "createdAt": "2 weeks ago",
                "score": 5,
                "user": {
                    "image": { 
                    "png": "./images/avatars/image-maxblagun.png",
                    "webp": "./images/avatars/image-maxblagun.webp"
                    },
                    "username": "maxblagun"
                },
                "replies": [
                    {
                    "id": 3,
                    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    "createdAt": "1 week ago",
                    "score": 4,
                    "replyingTo": "maxblagun",
                    "user": {
                        "image": { 
                        "png": "./images/avatars/image-ramsesmiron.png",
                        "webp": "./images/avatars/image-ramsesmiron.webp"
                        },
                        "username": "ramsesmiron"
                    }
                    },
                    {
                    "id": 4,
                    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    "createdAt": "2 days ago",
                    "score": 2,
                    "replyingTo": "ramsesmiron",
                    "user": {
                        "image": { 
                        "png": "./images/avatars/image-juliusomo.png",
                        "webp": "./images/avatars/image-juliusomo.webp"
                        },
                        "username": "juliusomo"
                    }
                    }
                ]
                }
            ]
        }

        if(localStorage.getItem("userData") === null){
            localStorage.setItem("userData", JSON.stringify(data));
        }
        let newData = JSON.parse(localStorage.getItem("userData"));

        let htmlStructure = "";
        let deleteID;

        // icons
        let plusSign = `<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>`;

        let minusSign = `<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>`;

        let editSign = `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>`;

        let deleteSign = `<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>`;

        let replySign = `<svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>`;

        for (let i = 0; i < newData.comments.length; i++) {
            htmlStructure += `<div class='comments-container'>
                <div class='comment-vote-container'>
                    <div class='vote-btns' onclick="plusOperation(${newData.comments[i].id})">
                        ${plusSign}
                    </div>
                    <span id=#${newData.comments[i].id} class='score'>${newData.comments[i].score}</span>
                    <div class='vote-btns' onclick="minusOperation(${newData.comments[i].id})">
                        ${minusSign}
                    </div>
                </div>

                <div class='comments'>
                    <div class='comments-subcontainer'>
                        <div class='comments-userinfo'>
                            <img src=${newData.comments[i].user.image.webp} alt="currentUser" class='profile-pic' />
                            <span class='comment-username'>${newData.comments[i].user.username}</span>
                            <span class='comment-time'>${newData.comments[i].createdAt}</span>
                        </div>
                        <div class='comment-reply' onclick="toggle(${newData.comments[i].id});">
                            <div>${replySign}</div>
                            <span class='comment-reply'>Reply</span>
                        </div>
                    </div>
                    <div class='comment-text'>
                        ${newData.comments[i].content}
                    </div>
                </div>
            </div>
            
            <form id=replyForm${newData.comments[i].id} class='reply-form-container' onsubmit="event.preventDefault(); reply();">
                <div class='reply-form'>
                    <div class='reply-form-sub'>
                        <img src=${newData.currentUser.image.webp} class='profile-pic' alt='profile-img' />
                    </div>
                    <textarea id="post" name="post" class='repy-text' placeholder='Add a comment...' rows='4'>@${newData.comments[i].user.username} </textarea>
                    <button class="reply-btn" type="submit">
                        Reply
                    </button>
                </div>
            </form>
            `

            for (let j = 0; j < newData.comments[i].replies.length; j++) {
                // newData.comments[i].replies[i]
                htmlStructure += `
                    <div class='replies-container'>
                        <div class='replies-vote-container'>
                            <div class='vote-btns' onclick="plusOperation(${newData.comments[i].replies[j].id})">
                                ${plusSign}
                            </div>
                            <span id=#${newData.comments[i].replies[j].id} class='score'>${newData.comments[i].replies[j].score}</span>
                            <div class='vote-btns' onclick="minusOperation(${newData.comments[i].replies[j].id})">
                                ${minusSign}    
                            </div>
                        </div>

                        <div class='comments'>
                            <div class='comments-subcontainer'>
                                <div class='comments-userinfo'>
                                    <img src=${newData.comments[i].replies[j].user.image.webp} alt="currentUser" class='replies-img' />
                                    <span class='comment-username'>${newData.comments[i].replies[j].user.username}</span>
                                    <span class='comment-time'>${newData.comments[i].replies[j].createdAt}</span>
                                </div>
                                ${newData.currentUser.username === newData.comments[i].replies[j].user.username ? 
                                    `<div class='flex items-center space-x-8'>
                                        <div class='flex items-center space-x-2 cursor-pointer' onclick="confirmDelete(${newData.comments[i].replies[j].id})" data-modal-toggle="popup-modal">
                                            <div>${deleteSign}</div>
                                            <span class='text-md text-delete font-medium'>Delete</span>
                                        </div>

                                        <div class='flex items-center space-x-2 cursor-pointer'>
                                            <div>${editSign}</div>
                                            <span class='text-md text-edit font-medium'>Edit</span>
                                        </div>
                                    </div>`
                                : 
                                    `<div class='flex items-center space-x-2 cursor-pointer'>
                                        <div>${replySign}</div>
                                        <span class='text-md text-edit font-medium'>Reply</span>
                                    </div>`
                                }
                            </div>
                            <div class='text-gray-500'>
                                <span class='text-red-500'>@${newData.comments[i].replies[j].replyingTo}</span> ${newData.comments[i].replies[j].content}
                            </div>
                        </div>
                    </div>
                `
            }

        }

        htmlStructure += `
            <form id="postForm" class='w-[90%] md:w-[50%]' onsubmit="event.preventDefault(); send();">
                <div class='p-4 bg-white bg-white p-4 rounded-lg flex items-start space-x-6'>
                    <div class='w-10 h-10 flex-none'>
                        <img src=${newData.currentUser.image.webp} class='' />
                    </div>
                    <textarea id="post" name="post" class='grow block p-2.5 w-96 text-sm text-gray-900 bg-white rounded-lg border border-gray-300' placeholder='Add a comment...' rows='5'></textarea>
                    <button class='flex-none text-white py-2 px-6 rounded-md bg-edit' type="submit">
                        Send
                    </button>
                </div>
            </form>
        `;

        htmlStructure += `<div id="modal">
            <div class="modal-content">
                <h4 class="modal-heading">Delete comment</h4>
                <p class="modal-paragraph">Are you sure you want to delete this comment?. This will remove the comment and can not be undone.</p>
                <div class="modal-btns">
                    <button class="modal-cancel" onclick="cancelModal()">No, Cancel</button>
                    
                    <button class="modal-delete" onclick="deleteOperation()">
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>`;

       

        document.querySelector("#main").innerHTML = htmlStructure;

        function send(){
            alert(`we are here`)
        }

        function plusOperation(id){
            for (let i = 0; i < newData.comments.length; i++) {
                if(newData.comments[i].id === id){
                    newData.comments[i].score = newData.comments[i].score += 1;
                    document.getElementById(`#${newData.comments[i].id}`).textContent = newData.comments[i].score;
                } else {
                    for (let j = 0; j < newData.comments[i].replies.length; j++) {
                        if(newData.comments[i].replies[j].id === id){
                            newData.comments[i].replies[j].score = newData.comments[i].replies[j].score +=1;
                            document.getElementById(`#${newData.comments[i].replies[j].id}`).textContent = newData.comments[i].replies[j].score;
                        }
                    }
                }
            }

            localStorage.setItem("userData", JSON.stringify(newData));
        }

        function minusOperation(id){
            for (let i = 0; i < newData.comments.length; i++) {
                if(newData.comments[i].id === id){
                    newData.comments[i].score = newData.comments[i].score -= 1;
                    document.getElementById(`#${newData.comments[i].id}`).textContent = newData.comments[i].score;
                } else {
                    for (let j = 0; j < newData.comments[i].replies.length; j++) {
                        if(newData.comments[i].replies[j].id === id){
                            newData.comments[i].replies[j].score = newData.comments[i].replies[j].score -=1;
                            document.getElementById(`#${newData.comments[i].replies[j].id}`).textContent = newData.comments[i].replies[j].score;
                        }
                    }
                }
            }

            localStorage.setItem("userData", JSON.stringify(newData));
        }

        function confirmDelete(id) {
            let modal = document.getElementById("modal");
            modal.classList.remove("hidden");
            deleteID = id;
        }

        function deleteOperation(){
            newData.comments.forEach(comment => {
                comment?.replies.forEach((reply, index) => {
                    if(reply.id === deleteID){
                        let ind = index;
                        if(ind !== -1) comment.replies.splice(ind, 1)
                    }
                })
            });

            setTimeout(() => {
                cancelModal();
                window.location.reload();
            }, 1500)
            
            localStorage.setItem("userData", JSON.stringify(newData));
        }


        function send() {
            let currentUser = newData.currentUser;
            let post = document.getElementById("post").value;
            
            if(post !== ""){
                let data = {
                    "id": Math.floor(Math.random() * 50),
                    "content": post,
                    "createdAt": "1 day ago",
                    "score": 0,
                    "user": {
                        "image": { 
                            "png": currentUser.image.png,
                            "webp": currentUser.image.webp
                        },
                        "username": currentUser.username
                    },
                    "replies": []
                }
                newData.comments.push(data);
            }
            
            localStorage.setItem("userData", JSON.stringify(newData));
            window.location.reload();
        }

        function toggle(id){
            let form = document.getElementById(`replyForm${id}`);
            if(form.classList.contains("hidden")){
                form.classList.remove("hidden")
            } else {
                form.classList.add("hidden")
            }
        }

         window.onclick = function(event) {
            let modal = document.getElementById("modal");
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        }

        function cancelModal() {
            let modal = document.getElementById("modal");
            modal.classList.add("hidden");
        }