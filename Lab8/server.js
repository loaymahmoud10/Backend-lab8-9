const express=require('express');
const app=express()

app.use(express.json())

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})

let posts = [
  {
    id: 1,
    title: "My First Post",
    content: "This is the content of the first post.",
    createdAt: "2025-01-01T10:00:00Z",
    comments: [
      {
        id: 101,
        author: "John Doe",
        text: "Great post!",
        createdAt: "2025-01-01T11:00:00Z"
      },
      {
        id: 102,
        author: "Sara Ali",
        text: "Nice work Amir!",
        createdAt: "2025-01-01T12:15:00Z"
      }
    ]
  },
  {
    id: 2,
    author: "Mariam Hassan",
    title: "Learning JavaScript",
    content: "Today I learned about arrays and objects!",
    likes: 5,
    createdAt: "2025-01-03T14:20:00Z",
    comments: [
      {
        id: 103,
        author: "Basem",
        text: "JavaScript is awesome!",
        createdAt: "2025-01-03T15:00:00Z"
      }
    ]
  },
  {
    id: 3,
    author: "Hadary",
    title: "My New Project",
    content: "Building a task manager using React and Node!",
    likes: 22,
    createdAt: "2025-01-05T19:45:00Z",
    comments: []
  }
];
idCnt = posts.length + 1 
//get all posts
app.get("/posts",(req,res)=>{
    res.json(posts)
})
//get post by id
app.get("/posts/:id",(req,res)=>{
   const id = Number(req.params.id)
    const post=posts.find(p=>p.id===id)

    if(!post){
       return res.json("can not get this post")
    }
        res.json(post)
       
    
})

//post post 
app.post("/posts",(req,res)=>{
    const post={
        id:idCnt++,
        title:req.body.title,
        content:req.body.content,
        comments:[]
    }
    posts.push(post)
    res.json("post Posted Successfully!")
})
//update post
app.put("/posts/:id",(req,res)=>{
   const id = Number(req.params.id)
    const post=posts.find(p=>p.id===id)
    if(!post){
      return  res.json("can not get this post")
    } 
    post.title=req.body.title
    post.content=req.body.content
    res.json("post updated!")             
    });

//delete post

app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.json("Post not found");
    }
    posts = posts.filter(p => p.id !== id);
    res.json("Post deleted!");
});
//get comments of post by id
app.get("/posts/:id/comments",(req,res)=>{
    const id = Number(req.params.id)
    const post=posts.find(p=>p.id===id)

    if(!post){
       return res.json("can not get this post")
    }
    res.json(post.comments)
    
})

//post comment of post id
app.post("/posts/:id/comments", (req,res)=>{
    
    const id=Number(req.params.id) 
    const post = posts.find(p => p.id === id);

    if(!post){
        return res.json("Post not found");
    }

    const comment = {
        id: Date.now(),
        text: req.body.text
    };

    post.comments.push(comment);
    res.json(comment);
});

