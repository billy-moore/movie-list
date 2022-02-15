import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Skeleton from '@mui/material/Skeleton'

import Movie from './Movie/Movie'

const Movies = ({ setCurrentId }) => {
    //const state = useSelector((state) => state)
    const { movies } = useSelector((state) => state.movies)
    
    const movieCards = movies && movies.map( movie => <Grid item xs={12} sm={6} md={4} key={movie.id} ><Movie movie={movie} /></Grid>)  
        
    return (
        !movies?.length ? 
            <Fragment>
                <Skeleton variant="text" animation='wave'/>
                <Skeleton variant="circular" width={40} height={40} animation='wave'/>
                <Skeleton variant="rectangular" width={210} height={118} animation='wave' />
            </Fragment>
            : 
        <Fragment >
            { movieCards }
        </Fragment>
    )
}

export default Movies
