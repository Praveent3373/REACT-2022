import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0
    },
    title: {
        fontSize: 18,
    },
    link: {
        marginRight: theme.spacing(2),
        fontSize: 16,
        color: '#555'
    }
   
}))
const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography variant="h5" className={classes.title} gutterBottom>Online Friends</Typography>
            <AvatarGroup max={8} style={{marginBottom: 15}}>
                <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg" />
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/8.jpg" />
            </AvatarGroup>
            <Typography variant="h5" className={classes.title} gutterBottom>Image Gallery</Typography>
            <ImageList rowHeight={160} cols={3} style={{marginBottom: 15}}>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="{item.title}" />
                    </ImageListItem>
               </ImageList>
            <Typography variant="h5" className={classes.title} gutterBottom>Categories</Typography>
            <Typography>
                <Link className={classes.link} href="#" variant="body">
                    Sports
                </Link>
                <Link className={classes.link} href="#" variant="body">
                    Food                    
                </Link>
                <Divider flexItem style={{marginBottom: 5}}/>
                <Link className={classes.link} href="#" variant="body2">
                    Movies
                </Link>
                <Link className={classes.link} href="#" variant="body2">
                    Science
                </Link>
                <Link className={classes.link} href="#" variant="body2">
                    Business
                </Link>
            </Typography>
        </Container>
    )
}

export default Rightbar;