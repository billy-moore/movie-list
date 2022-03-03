import React from 'react'

import { Paper, Grid, Button, Typography } from '@material-ui/core'

import BackgroundBar from '../../../images/bar-background.jpeg'
const RecipeSheet = ({ id, name, thumbnail, glass, instructions, ingredients}) => {
  //console.log(instructions)
  return (
    <Paper style={{ backgroundImage: `radial-gradient(rgba(194, 24, 91, 0.4), rgba(49, 27, 146, 0.2)), url(${BackgroundBar})`, backgroundPosition: 'left center'}}>
      <Grid container style={{ padding: '1rem'}}>

        <Grid item xs={6} container justifyContent='center'>
          <img src={ thumbnail } alt={ name } style={{ maxWidth: 'inherit'}}/>
        </Grid>

        <Grid item xs={6} container justifyContent='center'>
          <Grid item xs={12} style={{ backgroundColor: 'rgb(49, 27, 146)', borderRadius: '10px 10px 0 0'}}>
            <Typography variant='h6' style={{ padding: '.8rem', color: 'rgb(233, 30, 99)', textAlign: 'center'}}>
            {name}
          </Typography>
          </Grid>
          <Grid item xs={12} style={{ backgroundColor: 'rgb(63, 81, 181)', textAlign: 'center ', color: 'white', paddingTop: '.4rem'}}>
          <Typography style={{ color: 'rgb(253, 216, 53)', }}>
            A { ingredients[0].ingredient} drink in a { glass }
          </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography>
              Main: { instructions[0].ingredient}
          </Typography>
          </Grid> */}
          <Grid item xs={12} container style={{ backgroundColor: 'rgba(84, 110, 122, .7)', color: 'white', display: 'flex', justifyContent: 'center', padding: '1rem', overflow: 'auto' }}>
            <Typography variant='body1' >
              Drink Ingredients:
            </Typography>
          
            {ingredients.map((items, index) => items.ingredient && 
              <Grid item container key={index+items.ingredient} >
                <Grid item xs={6}>
                  <Typography variant='body1'>
                    {items.ingredient}
                  </Typography>
                </Grid>
                <Grid item xs={6} container justifyContent='center'>
                  <Typography variant='body1'>
                    amount: { items.measurement}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>

        </Grid>

            <Grid item xs={12} style={{ backgroundColor: 'rgb(63, 81, 181)', textAlign: 'center ', color: 'white', padding: '.5rem', marginTop: '.5rem'}}>
              <Typography style={{ color: 'rgb(253, 216, 53)', }}>
                Instructions
              </Typography>
            </Grid>
            <Grid item xs={12} container style={{ backgroundColor: 'rgba(84, 110, 122, .7)', color: 'white', display: 'flex', justifyContent: 'center', padding: '1rem', overflow: 'auto' }}>
              <Typography variant='body1'>
                { instructions }
              </Typography>
          </Grid>
      </Grid>
    </Paper>
  )
}

export default RecipeSheet