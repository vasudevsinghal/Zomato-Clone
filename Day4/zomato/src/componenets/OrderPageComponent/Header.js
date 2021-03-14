import { AppBar, makeStyles, TextField, Toolbar, InputBase } from '@material-ui/core';
import { LocationOnOutlined} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#fff'
  },
  inputRoot: {
    color: 'inherit',
  },
  root: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function Header() {
  const classes = useStyles();

  return (
      <div>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <LocationOnOutlined style={{ color: '#DC143C', marginRight: '8px' }} />
            <TextField fullWidth placeholder="H 133 Kunwar Singh Nagar" />
        </Toolbar>      
        </AppBar>
        <AppBar position="static" style={{
                marginTop: '8px',
                border: '2px',
                borderRadius: '35px',
            }}>
            <Toolbar>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>           
             <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;