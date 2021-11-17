import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes= useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsIsgnup] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsIsgnup((prev) => !prev);
        handleShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half></Input>
                                </>
                            )}
                            <Input name="email" label="E-mail Address" handleChange={handleChange} type="email"></Input>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}></Input>
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In!' : 'Dont have an account? Sign Up!'}
                            </Button>
                        </Grid>

                    </Grid>
                 </form>
            </Paper>
        </Container>
    )
}

export default Auth;