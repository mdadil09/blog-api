const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const blogRouter = require("./routes/blog");

const app = express();

//PORT
const PORT = 5718;

//middlewares

app.use(bodyParser.json());

//Routes

app.use("/api/blogs", blogRouter);

//Database Connection

connectDB();

//Connecting to the port;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
