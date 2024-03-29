const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/sajik";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

connect.then(
  db => {
    console.log(
      "Connected to mongodb server at port 27017 with db name sajik"
    );
  },
  err => {
    console.log(err);
  }
);
