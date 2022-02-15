import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';

import { getMovieDrinks } from '../../../actions/cocktails'

import DrinkCard from '../../DrinkList/DrinkCard/DrinkCard'
const DrinkTab = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const  { movies, drinks } = useSelector((state) => state)
    const barList  = useState( movies.drinks )
    const movieId = movies.currentMovie.id
    const movieDrinks = movies.drinks
    const extraDrinks = drinks.list
    
    useEffect(() => {
        
        if (movieDrinks.length < 5){
            dispatch( getMovieDrinks( movieId, extraDrinks ) )
        }
        movieDrinks.push( ...extraDrinks )
    
    }, [dispatch, movieDrinks, barList, extraDrinks, movieId])

    const clickDrink = ( e, drink ) => {
        e.preventDefault()
        
    }

    return ( 
        <Grid container item>
            <Paper
                style={{
                    backgroundImage: `radial-gradient(rgba(194, 24, 91, 0.4), rgba(49, 27, 146, 0.2)),`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'top right',
                    backgroundSize: 'cover',
                }}
            >
                <Typography variant='h6' style={{ paddingTop: '1rem', textAlign: 'center'}}>Suggested Drinks</Typography>
                <Grid container spacing={2} style={{padding: '1rem'}} justifyContent='center' alignContent='center'>
                        {movieDrinks && movieDrinks.map((drink, index) => (
                            <DrinkCard 
                                name={ drink.strDrink }
                                thumbnail={ drink.strDrinkThumb }
                                index={ index }
                                key={index+drink.strDrink || index}
                                clicked={ (e) => clickDrink( e, drink )}
                                />
                        )) }
                    <Grid item xs={8}>
                        <TextField placeholder='Ask for a Drink' fullWidth variant='outlined'/>

                    </Grid>
                    <Grid item xs={2} container alignContent='center'>
                        <Button variant='contained' color='primary' size='large' >
                            Search
                        </Button>
                    </Grid>
                    
                </Grid>
            </Paper>
        </Grid>
    )
}

export default DrinkTab;
