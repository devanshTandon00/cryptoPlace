import axios from 'axios'

// GET
export async function getBlogPosts(){
  let data;
  await axios
    .get('/api/getBlogPosts')
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

// ADD
export async function addBlogPost(blogPost){
  let data;
  const blogPostToAdd = {
    title: blogPost.title,
    body: blogPost.body,
  };
  await axios
    .post('/api/addBlogPost', blogPostToAdd)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

// EDIT
export async function editBlogPost(blogPost){
  let data;
  const blogPostToEdit = {
    _id: blogPost._id,
    title: blogPost.title,
    body: blogPost.body,
  };
  await axios
    .post('/api/editBlogPost', blogPostToEdit)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}

// DELETE
export async function deleteBlogPost(blogPost){
  let data;
  const blogPostToDelete = {
    // Whatever attributes you need to pass in
    // Only need the _id to find and delete the blogPost
    _id: blogPost._id
  };
  await axios
    .post('/api/deleteBlogPost', blogPostToDelete)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
  );
  return data;
}
