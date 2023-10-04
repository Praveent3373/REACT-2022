import { Button, Checkbox, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";

import MuiAlert from '@material-ui/lab/Alert';
const { makeStyles } = require("@material-ui/core")

const useStyles = makeStyles((theme) => ({
    fixed: {
        position: 'fixed',
        bottom: 15,
        right: 15
    },
    container: {
        background: 'white',
        color: 'black',
        width: 500,
        height: 620,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh'
        }
    },
    form: {
        padding: theme.spacing(3)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [checked, setCheck] = useState(true);
    const classes = useStyles();
    const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
            setAlert(false);
      };
    return (
        <>
            <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(!open)}>
                <Fab color="primary" className={classes.fixed}>
                    <AddIcon></AddIcon>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} action="">
                        <div className={classes.item}>
                            <TextField label="Title" size="small" style={{width: '100%'}}></TextField>
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write your story"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="outlined" style={{width: '100%'}}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" value='Public'>
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment on this? </FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="Every One" control={<Radio size="small" />} label="Every One" />
                                <FormControlLabel value="Friends" control={<Radio size="small" />} label="Friends" />
                                <FormControlLabel value="No One" control={<Radio size="small" />} label="Other" />
                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="(Custom Premium)" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                        <FormControlLabel 
                            control={
                                <Checkbox
                                    checked = {checked}
                                    onChange = {(e) => setCheck(e.target.checked)}
                                    inputProps={{ 'aria-label': 'primary Checkbox A' }}
                                />
                            }
                            label = 'Subscribe for the newsletter'
                        />
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{marginRight: 10}} onClick={()=> setAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpen(!open)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <Alert onClose = {handleClose} severity="success">Form submited successfully</Alert>
            </Snackbar>
        </>
    )
}

export default Add;


// for alert
// https://v4.mui.com/api/snackbar/#snackbar-api
// npm i @material-ui/lab