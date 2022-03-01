import React, { Fragment, useState } from "react";

import { Paper, Container, Grid, Typography } from '@material-ui/core'

import UserHeader from './UserHeader/UserHeader' 
import WatchList from './WatchList/WatchList'
import DrinkList from './DrinkList/DrinkList'

const UserDetails = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

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
            
              
          </Grid>
        </Container>

    )
};

export default UserDetails;
