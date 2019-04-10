


const Renderer = function (posts){
   
    const renderPosts = function(posts){
    
        $("#posts").empty()
    
        for(let i in posts){
        
            $("#posts").append (`<div class = 'post' id = ${posts[i].id}> ${posts[i].text} </div> `)
     }  
     
     for (let index of posts[i].comments) {
            let newComment = $(`<div class = 'comment' id = ${posts[i].comments[index].id}> ${posts[i].comments[index].text} </div> `)
            
            $(`#${posts[i].id}`).append(newComment)      
     }
     
        $("#posts").append(`<input class = Post placeholder = have something to say? > </input>`)
        $("#posts").append(`<button class = addComment> comment </button> `)
        $("#posts").append(`<button class =      > delete post </button>`)
    }
    return{
        renderPosts: renderPosts
    }
}   




































