const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    },
    date: {
      type: String,
      default: Date.now()
    },
  },
  { collection: 'BlogPost'}
);

module.exports = mongoose.model('BlogPost', BlogPostSchema);
