import React from 'react'

import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core'

const DrinkCard = ({ name, thumbnail, id, type, clicked }) => {
  return (
    <Grid item >
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
    </Grid>
    
  )
}

export default DrinkCard