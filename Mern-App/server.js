const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const item = require("./routes/api/item");

const app = express();
app.use(bodyParser.json());


//import the mongoURI from config
const db = require('./config/key').mongoURI;

mongoose.connect(db)
    .then(() => console.log("db is connected"))
    .catch(err => console.log(err));

app.use('/api/item', item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening to port  ${port}`));


