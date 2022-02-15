import React from 'react'

import { Paper, Grid, Button, Typography } from '@material-ui/core'

const RecipeSheet = ({ id, name, thumbnail, glass, instructions}) => {
  return (
    <Paper>
      <Grid container >
        <Typography>
          {name}
        </Typography>
        <Typography>
          glass type: { glass }<br/>
        </Typography>
        <Typography>
          drink id: { id }
        </Typography>
        {instructions.map((items, index) => items.ingredient && 
        <Grid container key={index+items.ingredient}>
          <Grid item xs={6}>
            <Typography>
              ingredient: {items.ingredient}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              amount: { items.measurement}
            </Typography>
          </Grid>
        </Grid>
        )}
      </Grid>
    </Paper>
  )
}

export default RecipeSheet