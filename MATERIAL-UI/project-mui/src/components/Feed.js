import { Container } from "@material-ui/core";
import GridSample from "./GridSample";
import Post from "./Post";

const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))
const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
           <Post></Post>
           <Post></Post>
           <GridSample></GridSample>
        </Container>
    )
}

export default Feed;