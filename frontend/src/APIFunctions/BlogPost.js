import axios from 'axios';

//API Functions that we call in our page files
//Axios will handle all the routing
//Basically sending this data to/from the page to the routes in routes/User.js

export async function getBlogPosts(){
  let data;
  await axios
    .get('/api/getBlogPosts')
    .then(res => {
      console.log("res.data received: ", res.data);
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

export async function addBlogPost(blogPost){
  let data;
  const blogPostToAdd = {
    title: blogPost.title,
    body: blogPost.body,
  };
  await axios
    .post('/api/addBlogPost', blogPostToAdd)
    .then(res => {
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

export async function editBlogPost(blogPost){
  let data;
  const blogPostToEdit = {
    _id: blogPost._id,
    title: blogPost.title,
    body: blogPost.body,
  }
  await axios
    .post('/api/editBlogPost', blogPostToEdit)
    .then(res => {
      console.log("API Functions", blogPostToEdit);
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

export async function deleteBlogPost(blogPost){
  let data;
  const blogPostToDelete = {
    // only need the _id to find and delete the blogPost
    _id: blogPost._id
  }
  console.log(blogPostToDelete);
  await axios
    .post('/api/deleteBlogPost', blogPostToDelete)
    .then(res => {
      // console.log("sending data", res.data);
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}
