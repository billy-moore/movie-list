import React, { useState, Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'
import { addDrink } from '../../../actions/auth'

const DrinkCard = ({ name, thumbnail, id, type, clicked }) => {
  const state = useSelector((state) => state)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  //const userID = user[0].result.googleId || user.id

  //! needlessly convoluted: Pass UserID and Drink ID. Update USER id with drink in "drink list" array
  const addDrinkHandler = () => {
    console.log( state )
    console.log( user )
  }

  return (
    <Grid item >
          <Paper style={{ maxWidth: '200px'}}>
            <ButtonBase onClick={ clicked }>
              <img src={ thumbnail } alt={name} style={{ width: '200px'}}/>
            </ButtonBase>
            <ButtonBase onClick={ clicked }>
              <Typography variant='h6' style={{ lineHeight: '1.2rem', padding: '.5rem', whiteSpace: 'normal', hyphens: 'auto', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {name}
              </Typography>
            </ButtonBase>
              
              { user && 
                <Fragment>
                  <Button fullWidth variant='contained' color='secondary'>
                    Cheers!
                  </Button>
                  <Button fullWidth variant='contained' color='primary' onClick={ addDrinkHandler }>
                    Add Drink
                  </Button>
                </Fragment>
              }
          </Paper>
    </Grid>
  )
}

export default DrinkCard