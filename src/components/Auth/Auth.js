import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../../actions/auth'

import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'

import useStyles from './styles'
import { AUTH } from '../../constants/actionTypes'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Auth = () => {
    const classes = useStyles()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isSignup, setIsSignup ] = useState(false)
    const [ formData, setFormData ] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if( isSignup ){
            dispatch( signUp( formData, navigate ) )
            navigate('/')
        } else {
            dispatch( signIn( formData, navigate ) )
            navigate('/')
        }

    }

    const handleChange = (e) => {
        setFormData( { ...formData, [e.target.name]: e.target.value } )
    }

    const switchMode = () => {
        setIsSignup( (prevIsSignup) => !prevIsSignup )
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj //?. = cannot get property, profileObj undefined
        const token = res?.tokenId

        try {
            dispatch({ type: AUTH, data: { result, token } })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log('Google Sign in was unsuccessful. Try again later')
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={ classes.paper } elevation={3} >
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={ classes.form} onSubmit={handleSubmit }> 
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstname' label='First Name' handleChange={ handleChange } autoFocus half />
                                    <Input name='lastname' label='Last Name' handleChange={ handleChange } half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={ handleChange } type='email' />
                        <Input name='password' label='Password' handleChange={ handleChange } type={showPassword ? 'text' : 'password'} handleShowPassword={ handleShowPassword } />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={ handleChange } type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={ classes.submit }>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId='579435201673-rrih9sp1724u62pkapkb2hqasvgdbbja.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button 
                                className={ classes.googleButton } 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant='contained'>
                                    Sign in with Google
                            </Button>
                        )}
                        onSuccess={ googleSuccess }
                        onFailure={ googleFailure }
                        cookiePolicy='single_host_origin'
                    />
                    
                    <Grid container justifyContent='flex-end'>
                        <Button onClick={ switchMode }>
                            { isSignup ? 'Already have an account? Sign In' : `Don't have an account? Sign Up`}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
