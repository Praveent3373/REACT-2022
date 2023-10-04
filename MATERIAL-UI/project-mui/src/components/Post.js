import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@material-ui/core";

const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(4)
    },
    media: {
        height:280
    }
}))
const Post = () => {
    const classes = useStyles();
    return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                    image="https://v4.mui.com/static/images/image-list/breakfast.jpg"
                    title="Contemplative Reptile">
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">My first Post</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, impedit quibusdam? Non, iusto quos! Architecto a accusamus nam, aperiam animi repudiandae dicta nulla, sapiente reprehenderit dolor iusto quos eaque vero?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, impedit quibusdam? Non, iusto quos! Architecto a accusamus nam, aperiam animi repudiandae dicta nulla, sapiente reprehenderit dolor iusto quos eaque vero?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, impedit quibusdam? Non, iusto quos! Architecto a accusamus nam, aperiam animi repudiandae dicta nulla, sapiente reprehenderit dolor iusto quos eaque vero?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions>
            </Card>
      )
}

export default Post;