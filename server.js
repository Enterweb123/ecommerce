const dotenv = require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");

// get form data confing
const cors = require("cors");

// display terminal - request timeing
// const morgan = require("morgan");

dbConnect();
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// cors for access api to other domain
const app = express();
const PORT = 4000;
const Routers = require("./routes/index");
const cookieParser = require("cookie-parser");


// app.use(morgan());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("server home")
});

app.use("/api", Routers);

// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});