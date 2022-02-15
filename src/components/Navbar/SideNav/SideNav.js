import React from 'react';

import { useNavigate } from 'react-router-dom'

import { Drawer, IconButton, Divider, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';

const SideNav = () => {
    const navigate = useNavigate()

    const goToHandler = ( e ) => {
        navigate(`/${e}`)
    }
    
    return (
        <Drawer
            variant='permanent'
            anchor='left'
        >
            <IconButton onClick={ (e) => goToHandler('') }>
                <CopyrightIcon />
            </IconButton>
            <Divider />
                <IconButton >
                    <SearchIcon />
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
                <IconButton onClick={ (e) => goToHandler('users') }>
                    <AccountCircleIcon />
                </IconButton>
        </Drawer>
    )
};

export default SideNav;
