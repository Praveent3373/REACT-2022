import { Container, List, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";
import ListIcon from '@material-ui/icons/List';

const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        background: theme.palette.primary.main,
        height: '100vh',
        color: 'white',
        position: 'sticky',
        top: 0,
        [theme.breakpoints.up('sm')]: {
            background: 'white',
            color: 'black',
            border: '1px solid #ddd'
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            cursor: 'pointer'
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,

        }
    },

    text: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))
const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <ListIcon className={classes.icon} />
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Leftbar;