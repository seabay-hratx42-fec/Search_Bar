// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;
const db = require("../database-mysql/index.js")

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./client/dist'))

app.get('/', (req, res) => {
  db.test();
  res.status(200).send('Get request successful!');
});

app.post('/search', (req, res) => {
  console.log("****", req.body.searchedTerm);
  db.search(req.body.searchedTerm , (results) => {
    // if (err) {
    //   console.log("err is : ", err);
    //   res.send("error");
    // }
    // else {
      console.log(results);
      res.send(results);
    }
  //}
   ) 
})


app.listen(port, () => console.log(`Server is running on ${port}`));