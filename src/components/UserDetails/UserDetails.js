import React, { useEffect, useState } from "react";

import { Container, Grid, Button } from '@material-ui/core'
import { 
    useNavigate,
    useLocation, 
    //useParams 
  } from 'react-router-dom'
import { 
    useDispatch, 
    //useSelector 
  } from 'react-redux'

import { 
  LOGOUT, 
  // FETCH_USER
  } from '../../constants/actionTypes'

import UserHeader from './UserHeader/UserHeader' 
import WatchList from './WatchList/WatchList'
import DrinkList from './DrinkList/DrinkList'
//import { getUser } from "../../actions/auth";

const UserDetails = () => {
 // const state = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  //const { id } = useParams()

  const logoutHandler = () => {
        dispatch({ type: LOGOUT })
        navigate('/')
        setUser(null)
  }

  useEffect(() => {
    //const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
    //console.log( state )
  }, [ location ])  

  //* User.result. name, email, familyName, givenName, imageUrl

  return (

        <Container >
          <Grid container spacing={2} style={{paddingLeft: '2rem', paddingTop: '2rem'}}>
            
            <UserHeader 
              name = { user.result.name }
              avatar = { user.result.imageUrl }
            />
            <WatchList />
            
            <DrinkList />
            <Grid item >
              <Button onClick={ logoutHandler } variant='contained' color='secondary' >
                Logout
              </Button>
            </Grid>
            
              
          </Grid>
        </Container>

    )
};

export default UserDetails;
