import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Grid, makeStyles } from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Add from './components/Add';
import GridSample from './components/GridSample';
const useStyles = makeStyles((theme) => ({
    right: {
      [theme.breakpoints.down('sm')]: {
          display: 'none'
      }
    },
    main: {
      maxWidth: 1366,
      margin: 'auto'
    }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navbar></Navbar>
      <Grid container>
        <Grid item sm = {2} xs={2}><Leftbar></Leftbar></Grid>
        <Grid item sm = {7} xs={10}><Feed></Feed></Grid>
        <Grid item sm = {3} xs={2} className={classes.right}><Rightbar></Rightbar></Grid>
      </Grid>
      <Add/>
    </div>
  );
}

export default App;
