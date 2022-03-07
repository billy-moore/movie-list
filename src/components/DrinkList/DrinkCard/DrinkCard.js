import React, { useState, Fragment } from 'react'

import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'

const DrinkCard = ({ name, thumbnail, id, type, clicked }) => {
  const user = useState(JSON.parse(localStorage.getItem('profile')))

  const addDrinkHandler = () => {

    console.log( name, id, type )
  }
  return (
    <Grid item >
          <Paper style={{ maxWidth: '200px'}}>
            <ButtonBase onClick={ clicked }>
              <img src={thumbnail} alt={name} style={{ width: '200px'}}/>
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