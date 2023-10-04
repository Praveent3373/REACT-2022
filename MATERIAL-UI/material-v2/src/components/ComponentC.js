import { AppBar, Container, IconButton, Toolbar, Typography, Button } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import MenuIcon from '@material-ui/icons/Menu';

const ComponentC = () => {
    return <section>
        <header>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6">React Material UI</Typography>
                    <Button variant="contained" color="secondary">login</Button>
                </Toolbar>
            </AppBar>
        </header>
        <Container style ={{background: 'black', padding: 30, marginTop: 70}}>  
            <Typography variant="h5" style={{textAlign: 'center', color: 'white', margin:'10px 0'}}>Grid system with responive</Typography>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm ={6} lg={3}>
                    <Paper style={{width: '100%', height: 140}}></Paper>
                </Grid>
                <Grid item xs={12} sm ={6} lg={3}>
                    <Paper style={{width: '100%', height: 140}}></Paper>
                </Grid>
                <Grid item xs={12} sm ={6} lg={3}>
                    <Paper style={{width: '100%', height: 140}}></Paper>
                </Grid>
            </Grid>
        </Container>
    </section>
}

export default ComponentC

// extra stuff

/* xs, sm, md, lg */