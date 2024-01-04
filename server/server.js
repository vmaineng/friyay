require("dotenv").config({ path: "./config/config.env" });

// const { application } = require('express');
const mongoose = require("mongoose");
const express = require("express");

//routes
const entertainmentRoutes = require("./routes/entertainmentRouter");
const userRoutes = require("./routes/userRouter");

//start the server
const app = express();

//global middleware to access(parse) request
//app.use = is calling express method; and is referring to middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//setting up routes to habits and users
app.use("/api/entertainment", entertainmentRoutes);
app.use("/api/users", userRoutes);

// connect to DB && async
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listens for requests once we are connected to the database
    app.listen(process.env.PORT, () => {
      console.log("connected to db && listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  }); 
//it's a promise and can catch an error