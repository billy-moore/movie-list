import React, { useEffect, useState } from 'react'

import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
//import Navbar from './components/Navbar/Navbar'
import SideNav from './components/Navbar/SideNav/SideNav'
import MovieDetails from './components/MovieDetails/MovieDetails'
import UserDetails from './components/UserDetails/UserDetails'
import DrinkList from './components/DrinkList/DrinkList'

import Search from './components/Search/Search'
import DrinkDetails from './components/DrinkDetails/DrinkDetails';
import SearchDrawer from './components/Navbar/SideNav/SearchDrawer/SearchDrawer';

const App = () => {
    const user = JSON.parse(localStorage.getItem( 'profile' ) )
    const state = useSelector((state) => state)
    //const [currentId, setCurrentId] = useState(0)
    
    const canAuthorize = user ? <Auth /> : <Navigate replace to='/movies' />

    const [searchDrawer, setSearchDrawer] = useState(true)
    const [ anchorEl, setAnchorEl ] = useState(null)
    
    // const openSearch = ( event ) => {
    //     setAnchorEl( event.currentTarget )
    //     setSearchDrawer(prev=> !prev)
    // }

    useEffect(() => {
        state.auth = user
    }, [])

    
    const handleClose=() => {
        
    }

    
    return (
        <Router>
            <Container maxWidth="xl" >
                {/* <Navbar /> */}
                <SideNav search={() => setSearchDrawer(prev => !prev )}/>
                <SearchDrawer search={ searchDrawer } close={ handleClose } show={ searchDrawer } anchorEl={ anchorEl } />
                <Routes>
                    <Route path="/" exact element={ <Home />} />
                    <Route path='/movies' exact element={ <Home /> } />
                    <Route path='/search' element= { <Search /> } />
                    <Route path='/movie/:id' element={ <MovieDetails />} />
                    <Route path='/movie/:id/randomdrink' element={ <MovieDetails />} />
                    <Route path="/auth" exact element={ canAuthorize } />
                    <Route path="/user/:id" element={ <UserDetails /> } />
                    <Route path='/drinks' exact element={ <DrinkList /> } />
                    <Route path='/drinks/letter=:letter' exact element={<DrinkList />} />
                    <Route path='drink/:id' element={ <DrinkDetails />} />
                </Routes>
            </Container>
        </Router>
    )
}

export default App
