import { Typography, Container, Button, Checkbox, makeStyles } from "@material-ui/core"
import { ButtonGroup } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { FormControlLabel } from "@material-ui/core"
import { useState } from "react"
import { TextField } from "@material-ui/core"

const useStyles = makeStyles({
    input: {
        marginBottom: '8px'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '5px 10px',
        color: 'white',
        borderRadius: 5,
        width: '180px'
    }
})

function ComponentA() {
    const [checked, setCheck] = useState(true);
    const styles = useStyles();
    return <div className="formfileds">
            <Container style={{width: '50%', margin: '50px auto'}}>
                <Typography variant="h4" align="center">Contact form</Typography>
                <br />
                <form>
                    <TextField type='text' variant="outlined" color="primary" label="Name" className={styles.input} fullWidth></TextField>
                    <TextField type='email' variant="outlined" color="primary" label="Email" className={styles.input} fullWidth></TextField>
                    <TextField type='date' variant="outlined" color="primary" label="Date" className={styles.input} fullWidth></TextField>
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
                    <div className="buttonGroup">
                        <ButtonGroup variant="contained">
                        <Button startIcon ={<SaveIcon/>}  color='primary' size ="large">Save</Button>
                        <Button endIcon ={<DeleteIcon/>}  color='secondary' size ="large">delate</Button>
                        </ButtonGroup>
                    </div>
                    <br />
                    <Button className={styles.button} variant="contained" color="primary" size="large" onClick={() => alert('Form submited')}>Submit form</Button>
                </form>
            </Container>
    </div>
}
export default ComponentA



/* <Button 
    onClick={() => alert('material ui')} startIcon = {<SaveIcon/>} // endIcon
    variant='contained' // outlined
    color='primary' // 'seconday'
    size='large' // 'small'
    style={{fontSize: 16}}
    // disabled
    >click here
</Button> */
  