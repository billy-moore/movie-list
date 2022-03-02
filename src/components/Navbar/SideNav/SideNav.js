import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom'

import { Drawer, IconButton, Divider, Avatar, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';

const SideNav = ( props ) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const goToHandler = ( e ) => {
        navigate(`/${e}`)
    }

    const goToUser = ( id ) => {
        navigate(`/user/${ id }`)
    }

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))

    }, [ location ])

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
                {user?.result ? (
                    <IconButton onClick={ (e) => goToUser( `${user?.result.id || user?.result.googleId}`) } size='small' >
                    <Avatar alt={user?.result.name} src={user?.result.imageUrl} sx={{ width: 24, height: 24 }}>{user?.result.name.charAt(0)}</Avatar>
                </IconButton>
                ) : 
                (<IconButton onClick={ (e) => goToHandler('auth') }>
                    <AccountCircleIcon />
                </IconButton>)}
        </Drawer>
    )
};

export default SideNav;
