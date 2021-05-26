import {Box, Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import { useHistory } from "react-router-dom";

let useStyle = makeStyles({
    card: {
      margin: "20px",
    },
  });

function Hotel({hotel}){
    let history = useHistory();
    let classes = useStyle();
    return (
        <Card className={classes.card}
        onClick={() => {
            history.push("/detail");
        }}>
            <CardMedia component="img" 
            src={"http://localhost:5000"+hotel.path.substring(1)}>
            </CardMedia>
            <CardContent>
                <Box display="flex">
                    <Box flexGrow={1}>
                    <Typography>{hotel.name}</Typography>
                    </Box>
                    <Box>
                    <Typography>{hotel.rate}</Typography>
                    </Box>
                </Box>
                <Typography variant="caption">{hotel.address}</Typography>
            </CardContent>
        </Card>
    );
}

export default Hotel;