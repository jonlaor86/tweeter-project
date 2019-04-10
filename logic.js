const Tweeter = function(){{

    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function (){
        return posts
    }

    const addPost=function(text){
        posts.push({
        text: text,
        id: "p3 ++",
        comments: [] 
        })
    }

    const removePost = function(postID){
        for (let i in posts) {
            if (posts[i].id == postID) {
                posts.splice(postID,1)
            }
        }
    }

    const addComment =function(postID, text){
        for (let i of posts) {
            if ([i].comments == postID) {
                posts.comments[i].push({
                    text: text,
                    id: "c7 ++"  
                   })
            }
        }
    }

    const removeComment = function (postID, commentID) {
        for (let i in posts) {
            if (posts[i].id == commentID) {
                posts[i].splice(commentID, 1)
            }
        }
    }


        return {
            getPosts,
            addPost,
            removePost,
            addComment, 
            removeComment
        }
    }
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}




















