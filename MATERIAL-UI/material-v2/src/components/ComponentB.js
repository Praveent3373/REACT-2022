import { Button, Typography } from "@material-ui/core"
import { Container } from "@material-ui/core"

function ComponentB(){
    return <section style={{marginTop: 80}}>
            <Container maxWidth="xs">
            <Typography color="primary" variant='h3'>Typography h3</Typography>
            <Typography color="primary" variant='h5' component="div">h5 styles with div</Typography>
            <Typography paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident recusandae sint pariatur voluptates molestias, error porro, officia unde nisi ipsum incidunt culpa eos placeat magnam ea est doloremque non nesciunt.</Typography>
            <Button color="secondary" variant="contained">Button Text</Button>
            </Container>
    </section>
}

export default ComponentB