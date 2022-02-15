import React, { useState, useEffect } from 'react'

import { Link, useNavigate, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core'

import { LOGOUT } from '../../constants/actionTypes'

import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    //const state = useSelector((state) => state.movies)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    
    useEffect(() => {
        //const token = user?.token
        // JWT
        //dispatch( getMovies( page ))
        setUser(JSON.parse(localStorage.getItem('profile')))        
    },[location])

    const logout = () => {
        dispatch({ type: LOGOUT })
        navigate('/')
        setUser(null)
    }


    return (
        <AppBar className={ classes.appBar } position='static' color='inherit'>
            <div className={ classes.brandContainer }>
            <Typography className={ classes.heading } component={ Link } to={'/movies'} variant='h2' align='center'>Movie List</Typography>
            </div>
            <Toolbar className={ classes.toolbar}>
                { user ? (
                    <div className={ classes.profile }>
                        {/* <Link navigate={'/user/:id'}> */}
                            <Avatar className={ classes.purple} alt={ user.result.name } src={ user.result.imageUrl } align='end'>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={ classes.userName } variant='h6'>{ user.result.name }</Typography>
                        {/* </Link>     */}
                        <Button variant='contained' className={ classes.logout } color='secondary' onClick={logout}>Logout</Button>                    
                        
                    </div>
                ) : (
                    <Button component={Link} to={'/auth'} variant='contained' color='primary' >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
