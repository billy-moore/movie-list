import React from 'react'

import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'

const DrinkCard = ({ name, thumbnail, id, type, clicked }) => {
  return (
    <Grid item xs={4} direction='column'>
        <ButtonBase onClick={ clicked }>
          <Paper style={{ 
              maxWidth: '200px', 
              //maxHeight: '220px',
            }}>
            <img src={thumbnail} width='200px' alt={name} />
            <Typography variant='h6' style={{ lineHeight: '1.2rem', padding: '.5rem', whiteSpace: 'normal', hyphens: 'auto', textOverflow: 'ellipsis', overflow: 'hidden' }} >
                {name}
            </Typography>
          </Paper>
        </ButtonBase>

        <Button fullWidth style={{maxWidth: '200px'}} variant='contained' color='secondary'>
          Cheers!
        </Button>


        <Button fullWidth style={{maxWidth: '200px'}} variant='contained' color='primary'>
          Drink List
        </Button>

    </Grid>
  )
}

export default DrinkCard