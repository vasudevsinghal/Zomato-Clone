var admin = require("firebase-admin");
const csv = require("csvtojson");

var serviceAccount = require("./zomato-7c424-firebase-adminsdk-3r8jb-a171dd784f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let hotelsCollection = admin.firestore().collection("hotels");

csv()
  .fromFile("./zomato_with_images.csv")
  .then((json) => {
    json.slice(0, 50).map((hotel)=> {
      hotelsCollection.add(hotel);
    })
});