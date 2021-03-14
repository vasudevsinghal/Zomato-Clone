import {Avatar, Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from "../utils/firebase";

function ProfilePage({user, setUser}){
    return(
        <div>
        <Avatar alt="" src={user ? user.photoURL:""} style={{ margin: "8px 150px", alignItems: "center"}} >{user ? user.displayName[0]:""}</Avatar>
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>{user ? user.displayName:""}</h1>
        <Button onClick={()=>{
            firebase.auth().signOut();
            setUser(null);
        }} variant="contained" color="secondary" startIcon={<ExitToAppIcon />} style={{ margin: "8px 120px", alignItems: "center"}}>LogOut</Button>
        </div>
    );
}
export default ProfilePage;