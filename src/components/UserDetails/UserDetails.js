import React, { useEffect, useState } from "react";

import { Container, Grid, Button } from '@material-ui/core'
import { 
    useNavigate,
    useLocation, 
    //useParams 
  } from 'react-router-dom'
import { 
    useDispatch, 
    useSelector 
  } from 'react-redux'

import { 
  LOGOUT, 
  // FETCH_USER
  } from '../../constants/actionTypes'

import UserHeader from './UserHeader/UserHeader' 
import WatchList from './WatchList/WatchList'
import DrinkList from './DrinkList/DrinkList'
import { getUser } from "../../actions/auth";

const UserDetails = () => {
  //const state = useSelector((state) => state)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  
  const drinkList = user.result.drinkList
  const watchList = user.result.watchList

  const logoutHandler = () => {
        dispatch({ type: LOGOUT })
        navigate('/')
  }

  useEffect(() => {
    //const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
    //console.log( user )
  }, [ location ])  

  //* User.result. name, email, familyName, givenName, imageUrl

  return (

        <Container >
          <Grid container spacing={2} style={{paddingLeft: '2rem', paddingTop: '2rem'}}>
            
            <UserHeader 
              name = { user.result.name }
              avatar = { user.result.imageUrl }
            />
            <WatchList 
             // list={ user.result.watchList }
              list={ watchList }
            />
            
            <DrinkList 
              list={ drinkList }
            /> 
            <Grid item >
              <Button onClick={ logoutHandler } variant='contained' color='secondary' >
                Logout
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' color='primary' >
                Change Profile Image
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' color='primary' >
                Delete Account
              </Button>
            </Grid>
              
          </Grid>
        </Container>

    )
};

export default UserDetails;
