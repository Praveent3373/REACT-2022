
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    root: {
        maxWidth: 345,
        },
        media: {
            height: 140,
        },
}))

const CardData = () => {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    )
}

export default CardData;