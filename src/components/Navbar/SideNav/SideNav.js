import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { Drawer, IconButton, Divider, Avatar, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';

const SideNav = ( props ) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const token = user?.token

    const goToHandler = ( e ) => {
        navigate(`/${e}`)
    }

    useEffect(() => {

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])
    
    return (
        <Drawer
            variant='permanent'
            anchor='left'
        >
            <IconButton onClick={ (e) => goToHandler('') }>
                <CopyrightIcon />
            </IconButton>
            <Divider />
                <IconButton onClick={ props.search }>
                    <SearchIcon  />
                </IconButton>
            <Divider />
                <IconButton onClick={(e) => goToHandler('movies') } >
                    <LocalMoviesIcon />
                </IconButton>
            <Divider />
                <IconButton onClick={ (e) => goToHandler('drinks') }>
                    <LocalBarIcon />
                </IconButton>
            <Divider />
                {user ? (
                    <IconButton onClick={ (e) => goToHandler('users') }>
                    <Avatar alt={ user.result.name } src={ user.result.imageUrl }>{user.result.name.charAt(0)}</Avatar>
                </IconButton>
                ) : 
                (<IconButton onClick={ (e) => goToHandler('auth') }>
                    <AccountCircleIcon />
                </IconButton>)}
        </Drawer>
    )
};

export default SideNav;
