const express = require('express');
const app = express();
const csv=require('csvtojson')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/photos', express.static('photos'));

app.get('/hotels', function (req, res) {
    csv()
    .fromFile("./zomato_with_images.csv")
    .then((json)=>{
       res.send(json.slice(0, 10));
    })
})
 
app.listen(3000)