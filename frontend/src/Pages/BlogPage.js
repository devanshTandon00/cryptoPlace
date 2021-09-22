import React, { Component } from 'react';
import BlogForm from '../Components/BlogForm';
import { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost } from '../APIFunctions/BlogPost';
import { Button, Card, CardTitle, CardText, Jumbotron } from 'reactstrap';
import './BlogPage.css';
const axios = require('axios');

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      posts: [],
    };
  }

  componentDidMount = () => {
    this.refreshBlogPostList();
  };

  checkConsole = () => {
    console.log('------------ Submit ------------');
    console.log('title:', this.state.submittedTitle);
    console.log('Data: ', this.state.submittedBody);
  };

  updateTitle = (e) => {
    // console.log("update title", e);
    this.setState({ title: e });
  };

  updateBody = (e) => {
    // console.log("update data", e);
    this.setState({ body: e });
  };

  isFilled = () => {
    return this.state.title !== '' && this.state.body !== '';
  };

  refreshBlogPostList = async () => {
    const res = await getBlogPosts();
    if(res){
      this.setState({posts: res});
    }
  }

  // onClick for 'Post' Button to add blog posts
  handleData = async (event) => {
    event.preventDefault();
    console.log('event', event);
    const blogPost = {
      title: this.state.title,
      body: this.state.body
    }
    const res = await addBlogPost(blogPost);
    console.log('res', res);
    this.refreshBlogPostList();
  };

  displayBlogPosts = (posts) => {
    if (!posts.length) {
      return null;
    }
    return posts.map((post, index) => (
      <Card
        body
        key={index}
        onClick={()=>{this.doStuff(post)}}
        className='card-thing'
      >
        <CardTitle>
          <strong>{post.title}</strong>
        </CardTitle>
        <CardText>{post.body}</CardText>
      </Card>
    ));
  };

  doStuff = async (post) => {
    //Comment out one or the other, onClick for each blogPost Card
    //If you want to editStuff, comment out deleteStuff, etc.

    this.editStuff(post);
    // this.deleteStuff(post);
  }

  editStuff = async (post) => {
    console.log('edit stuff', post);
    const updatedPost = {
      _id: post._id,
      title: 'Blog Post Title',
      body: 'Random Number: ' + Math.random()*100
    }
    const res = await editBlogPost(updatedPost);
    console.log('res', res);
    this.refreshBlogPostList();
  }

  deleteStuff = async (post) => {
    console.log('delete stuff', post);
    const res = await deleteBlogPost(post);
    console.log('res', res);
    this.refreshBlogPostList();
  }

  render() {
    return (
      <div className="blogPage">
        <Jumbotron className="jumbotron-spacing">
          <h1>The Blog</h1>
          <p className="lead">
            This is my only somewhat complete page on the website!
          </p>
          <hr className="my-2" />
          <p>
            I was able to do some MERN stack magic to make this blog post page.
            Leave a comment below (if you feel like it) :)
          </p>
        </Jumbotron>
        <div className="form-container">
          <BlogForm
            title={this.state.title}
            body={this.state.body}
            updateTitle={this.updateTitle}
            updateBody={this.updateBody}
          />
          <Button
            id="blogForm-button"
            disabled={!this.isFilled()}
            onClick={this.handleData}
          >
            Post
          </Button>
        </div>
        <div className="response-container">
          {this.displayBlogPosts(this.state.posts)}
        </div>
      </div>
    );
  }
}
