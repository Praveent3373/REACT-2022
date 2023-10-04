import { Container, Grid, Paper, Typography } from "@material-ui/core";
import CardData from "./CardData";
const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow:1
    }
}))
const GridSample = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.grid} style={{padding: 0}}>
            <Typography variant="h6" gutterBottom>Grid items</Typography>
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardData />
                </Grid>
              </Grid>
        </Container>
    )
}

export default GridSample;