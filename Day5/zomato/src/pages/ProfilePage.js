import {Avatar, Button, Box} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from "../utils/firebase";

function ProfilePage({user, setUser}){
    return(
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{
            height: "100%"
        }}>
        <Avatar alt={user ? user.displayName:""} src={user ? user.photoURL:""} />
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>{user ? user.displayName:""}</h1>
        <Button onClick={()=>{
            firebase.auth().signOut();
            setUser(undefined);
        }} variant="contained" color="secondary" startIcon={<ExitToAppIcon />} style={{width: "300px"}}>LogOut</Button>
        </Box>
    );
}
export default ProfilePage;