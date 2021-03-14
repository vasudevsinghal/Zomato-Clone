// import Cuisines from '../componenets/Cuisines'
// import { LocationOnOutlined } from '@material-ui/icons';
import Header from '../componenets/OrderPageComponent/Header';
import StripeButton from '../componenets/stripe';
import Chips from '../componenets/OrderPageComponent/Chips';

// const useStyles = makeStyles(() => ({
//   toolbar: {
//     backgroundColor: '#fff'
//   }
// }))

function OrderPage() {

  return (
    <div>
        <Header />
        <Chips />
        <StripeButton price={100} />
        {/* <h1>Order Page</h1>
        <Cuisines /> */}
    </div>
   
    
  );
}

export default OrderPage;