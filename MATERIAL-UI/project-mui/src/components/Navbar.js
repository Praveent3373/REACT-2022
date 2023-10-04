import { AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState } from "react";
const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block'
        }
    },
    logosm: {
        display: 'block',
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha (theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha (theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: '70%'
        }
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    canel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    icons: {
        // display: 'flex',
        alignItems: 'center',
        display: (props) => (props.open ? "none" : "flex")
    },
    badge: {
        marginRight: theme.spacing(2)
    },
    searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
    
}))
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open});
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logoLg} variant="h6">Material</Typography>
                <Typography className={classes.logosm} variant="h6">UI</Typography>
                <div className={classes.search}>
                    <Search></Search>
                    <InputBase placeholder ="Search..." className={classes.input} />
                    <Cancel className={classes.canel} onClick = {() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchBtn} onClick = {() => setOpen(!open)} />
                    <Badge className={classes.badge} badgeContent = {6} color="secondary"><MailIcon /></Badge>
                    <Badge className={classes.badge} badgeContent = {3} color="secondary"><NotificationsIcon /></Badge>
                    <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/3.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;