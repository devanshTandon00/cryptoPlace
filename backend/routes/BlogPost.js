const express = require("express");
const router = express.Router();
const BlogPost = require("../models/BlogPost");

// GET
router.get("/getBlogPosts", (req, res) => {
  BlogPost.find({}).then(blogPosts => res.json(blogPosts));
});

// ADD
router.post("/addBlogPost", (req, res) => {
  const newBlogPost = new BlogPost({
    title: req.body.title,
    body: req.body.body,
  });

  BlogPost.create(newBlogPost, (err, blogPost) => {
    if(err){
      return res.send(err);
    }
    return res.json(blogPost);
  });
});

// EDIT
router.post('/editBlogPost', (req, res) => {
  BlogPost.findById({_id: req.body._id})
    .then(blogPost => {
      blogPost.title = req.body.title || blogPost.title,
      blogPost.body = req.body.body || blogPost.body,
      blogPost.save()
        .then(ret =>{
          res.json(ret);
        })
        .catch(err =>{
          res.send(err);
        });
    })
    .catch(err=>{
      res.send({err, message: "blogPost not found"});
    })
});


// DELETE
router.post('/deleteBlogPost', (req, res) =>{
  BlogPost.deleteOne({ _id: req.body._id }, (err, blogPost) => {
    if(err){
      return res.send(err);
    }
    return res.json(blogPost);
  })
})

// router.get("/name", (req, res) => {
//   const data = { username: "testcase", age: 2 };
//   res.json(data);
// });

module.exports = router;
