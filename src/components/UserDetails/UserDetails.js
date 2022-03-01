import React, { Fragment, useState } from "react";

import { Avatar, Paper, Container, Grid, Typography } from '@material-ui/core'

const UserDetails = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  //* User.result. name, email, familyName, givenName, imageUrl

  return (
    <Fragment>
      <Grid container spacing={2} style={{ paddingTop: '2rem', width: '100%'}}>
        <Container>
          <Grid container spacing={2} style={{paddingLeft: '2rem'}}>
            <Grid item>
              <Paper
                elevation={5}
              >
                <Grid 
                  container 
                  spacing={2}
                  style={{
                    padding: '1rem',
                  }}
                >
                  <Grid container item justifyContent='center'>
                    <Avatar style={{ width: 100, height: 100 }} alt={ `${user.result.name} image` } src={user.result.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                  </Grid>
                  
                  <Grid container item xs={ 12 } md={ 8 } justifyContent='center'>
                      <Grid item xs={12}>
                        <Typography variant='h4' style={{ textAlign: 'center' }}>
                          {user.result.name}
                        </Typography>
                      </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper
                elevation={5}
              >
                Watch List
              </Paper>
              </Grid>

              <Grid item>
              <Paper
                elevation={5}
              >
                Drink List
              </Paper>
              </Grid>
          </Grid>
        </Container>
      </Grid>
    </Fragment>
    )
};

export default UserDetails;
