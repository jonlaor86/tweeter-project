

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())







$("#container").on("click", "#post", function(text){            //add post
    $("this").closest("#post").val()
    if (text != "") {
        Tweeter.addPost()
        renderer()
    }
})



$("#container").on("click", ".deletePost", function(postID){        // remove post
    $("this").closest(".#posts").find(".deletePost").val()
    tweeter.removePost(postID)
    renderer()
    
})



$("#container").on("click", ".addComment", function(postID, text){  // add comment
    $("this").closest("#posts").find(".addComment").val()
    tweeter.addComment(postID, text)
})  



$("#container").on("click", ".deletePost", function(postID, commentID){
    $("this").closest("#posts").find(".deletePost").val()
    tweeter.deletePost(postID, commentID)
})





















































