import {
  Switch,
  Route,
} from "react-router-dom";
import GoldPage from "../pages/GoldPage";
import OrderPage from "../pages/OrderPage";
import ProfilePage from "../pages/ProfilePage";
import OutPage from "../pages/OutPage";
import DetailPage from "../pages/DetailPage";
import BottomNav from "../componenets/BottomNav";

function BaseLayout({user, setUser}){
    return(
        <div style={{
            height : window.innerHeight
        }}>
            <Switch>
            <Route path="/order">
                <OrderPage />
            </Route>
            <Route path="/gold">
                <GoldPage/>
            </Route>
            <Route path="/profile">
                <ProfilePage user={user} setUser={setUser}/>
            </Route>
            <Route path="/out">
                <OutPage />
            </Route>
            <Route path="/detail">
                <DetailPage />
            </Route>
            </Switch>
            <BottomNav></BottomNav>
        </div>
        
    );
}

export default BaseLayout;