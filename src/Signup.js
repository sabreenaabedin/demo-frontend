/* eslint-disable */
import React, { Fragment, useState } from 'react';
import {TextField, Grid, Container, Button} from '@material-ui/core';


function Signup(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function emailValidation() {
        console.log(email)
        return  !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) 
    }

    function passwordValidation(){
        return (password.length < 8) ? true : false;
    }

    function confirmPasswordValidation(){
        return (password === confirmPassword) ? false : true;
    }

    function submitForm() {
        var values = "email: " + email + "password: " + password;
        console.log(values)
        return values
    }

   function completedForm(){
        return emailValidation() && passwordValidation() && confirmPasswordValidation();
   }


    return(
        <Fragment>
            <Container>
                 <Grid container>
                    <Grid item xs={12}>
                        <TextField id="email" value={email} onChange={(event) => setEmail(event.target.value)} type="string" error={emailValidation()} required={true} label="Email" placeholder="sample@email.com"/> 
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="passwords" value={password} onChange={(event) => setPassword(event.target.value)} type="password" error={passwordValidation()} required={true} label="Password" placeholder="*******"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" error={confirmPasswordValidation()} required={true} label="Confirm Password" placeholder="*******"/>    
                    </Grid>
                    
                </Grid>
                <Button variant="contained" label="submit" onClick={submitForm} disabled={completedForm()}> Submit</Button>
            </Container>
            
        </Fragment>
    )

}


export default Signup;