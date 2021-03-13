import {
  Switch,
  Route,
} from "react-router-dom";
import GoldPage from "../pages/GoldPage";
import OrderPage from "../pages/OrderPage";
import ProfilePage from "../pages/ProfilePage";
import BottomNav from "../componenets/BottomNav";

function BaseLayout(){
    return(
        <div>
            <Switch>
            <Route path="/order">
                <OrderPage />
            </Route>
            <Route path="/gold">
                <GoldPage/>
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            </Switch>
            <BottomNav></BottomNav>
        </div>
        
    );
}

export default BaseLayout;