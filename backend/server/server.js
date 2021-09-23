
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT; //step 1


const user = require("../routes/User");

// Add your new DB Collection Routes here
const BlogPostRoutes = require('../routes/BlogPost');

const config = require("../config/config.json");

//connect mongoDB with mongoose
mongoose.connect(process.env.DB_URL, {
  //step 2
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Check is mongoose is connected in your terminal
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//Parse every single json / urlencoded coming in
//makes it so that the router can access the data

//HTTP request logger

app.use(morgan("tiny"));

//Where I determine which route to put the data in (right now the data is in localhost:8080/api)\
app.use("/user", user);

//Where I determine which route to put the data in (right now the data is in localhost:8080/api)
//Use those added routes here, i.e. app.use('/api', YourRoutes);
app.use('/api', BlogPostRoutes);


//step 3
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../../frontend/public/index.html'));
});

app.listen(PORT, console.log(`SERVER IS STARTING AT ${PORT}`));
