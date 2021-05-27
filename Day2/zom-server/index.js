const express = require('express');
const app = express();
const csv=require('csvtojson')
const bearerToken = require('express-bearer-token');
var cors = require('cors')
var admin = require("firebase-admin");
var serviceAccount = require("./zomato-7c424-firebase-adminsdk-3r8jb-a171dd784f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors());
app.use(bearerToken());
// app.use(function (req, res) {
//   res.send('Token '+req.token);
// });

app.use("/hotels", (req, res, next) => {
    if (req.token) {
      admin
        .auth()
        .verifyIdToken(req.token)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((error) => {
          res.send(401);
        });
    } else {
      res.send(401);
    }
});
  

app.get("/check", (req, res) => {
    res.send("Responding");
});

app.use('/photos', express.static('photos'));

app.get('/hotels', function (req, res) {
    csv()
    .fromFile("./zomato_with_images.csv")
    .then((json)=>{
       res.send(json.slice(0, 50));
    })
})
 
app.listen(5001, ()=>{
  console.log("listening to port 5001");
})