const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require("body-parser");
const verifyRoles = require("./middleware/verifyRoles");
const { logger } = require("./middleware/logEvents");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");

dotenv.config();

const PORT = 8000;

const app = express();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

mongoose
  .connect(`${process.env.MONGODB_URL}/reconnaissance`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
