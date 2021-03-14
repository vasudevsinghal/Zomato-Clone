// import Cuisines from '../componenets/Cuisines'
// import { LocationOnOutlined } from '@material-ui/icons';
import { useEffect, useState } from "react";
import Header from '../componenets/OrderPageComponent/Header';
import StripeButton from '../componenets/stripe';
import Chips from '../componenets/OrderPageComponent/Chips';
import axios from "../utils/axios";
import Hotel from "../componenets/Hotel"

// const useStyles = makeStyles(() => ({
//   toolbar: {
//     backgroundColor: '#fff'
//   }
// }))

function OrderPage() {

  let [hotels, setHotels] = useState([]);

  useEffect(() => {
    // console.log("asjdas");
    axios.get("http://localhost:3000/hotels").then((res) => {
      setHotels(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div>
        <Header />
        <Chips />
        <StripeButton price={100} />

        {hotels.map((hotel, index)=>(
          <Hotel hotel={hotel} key={index}></Hotel>
        ))}

        {/* <h1>Order Page</h1>
        <Cuisines /> */}
    </div>
   
    
  );
}

export default OrderPage;