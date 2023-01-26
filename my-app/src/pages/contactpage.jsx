import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MiniContact from '../components/mini-contact';
import SocialBar from '../components/social-bar';



export default function ContactPage(){
    const styles = {
        floatingLabelFocusStyle: {
            color: "white"
        }
    }

return(
// dark mode form with first name, last name, email, message fields and a blue submit button

    
    
 
        
        <Container>

            <Paper
                component="form"
                sx={{
                    p: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    margin: ' 0 auto',
                    backgroundColor: '#1e1e1e',
                    color: '#ffffff',
                    overrides: {
                        MuiInputLabel: {
                            root: {
                                color: "rgba(255, 255, 255, 0.87)",
                            },
                        },
                    },
                }}
                elevation={3}
            >
                <h1 style={{ color: '#ffffff' }}>Contact Me</h1>
                <TextField
                    sx={{ m: 1, color: '#ffffff', width: '45ch' }}
                    id="outlined-basic"
                    label="First Name"
                    variant="filled"
                    color="primary"
                    className='text-field'
                    InputLabelProps={{ style: { color: '#ffffff' } }} />
                <TextField
                    sx={{ m: 1, width: '45ch' }}
                    id="outlined-basic"
                    label="Last Name"
                    variant="filled"
                    color="primary"
                    InputLabelProps={{ style: { color: '#ffffff' } }} />
                <TextField
                    sx={{ m: 1, width: '45ch' }}
                    id="outlined-basic"
                    label="Email"
                    variant='filled'
                    color="primary"
                    InputLabelProps={{ style: { color: '#ffffff' } }} />
                <TextField
                    sx={{ m: 1, width: '45ch' }}
                    id="outlined-basic"
                    label="Message"
                    variant="filled"
                    color="primary"
                    multiline
                    InputLabelProps={{ style: { color: '#ffffff' } }} />
                <Button
                    sx={{ m: 1, width: '25ch' }}
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
                <Box sx={ {

                    marginTop: '1em'

                }}>
                    
            <SocialBar />
        </Box>
            </Paper>




        </Container>
        
        
     
   

);

}