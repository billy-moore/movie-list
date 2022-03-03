import React, { useEffect, useCallback, Fragment } from 'react';
import { Grid, CircularProgress, Container, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
//import moment from 'moment'

import MovieScreen from './MovieScreen'
import DrinkTab from '../DrinkDetails/DrinkTab/DrinkTab'

import { useParams } from 'react-router-dom'
import { getMovie } from '../../actions/movies';

//import useStyles from './styles'

const MovieDetails = () => {
    const state = useSelector((state) => state)
    const { currentMovie, isLoading } = useSelector((state) => state.movies)

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const classes = useStyles()
    const { id } = useParams()

    const stableDispatch = useCallback(() => {
        dispatch( getMovie( id ))
    }, [id, dispatch]);
    
    useEffect(() => {
        stableDispatch()
    }, [ id, stableDispatch ])

    if(!currentMovie) return null

    console.log( state.drinks )
    return (
        <Fragment>
            <Grid container spacing={2} style={{ paddingTop: '2rem'}}>
                    { isLoading ? <CircularProgress /> : 
                    <Container>
                        <Grid container spacing={2} style={{paddingLeft: '2rem'}}>
                            <MovieScreen 
                                title={ currentMovie.title } 
                                poster_path={ currentMovie.poster_path }
                                backdrop_path={ currentMovie.backdrop_path }
                                release_date={ currentMovie.release_date }
                                vote_average={ currentMovie.vote_average }
                                overview={ currentMovie.overview }
                                tagline={ currentMovie.tagline }
                                runtime={ currentMovie.runtime }
                                />
                                <Button fullWidth variant='contained' color='primary' style={{ margin: '.5rem 1rem 0 1rem'}}>Add to Watch List</Button>
                            <DrinkTab />
                        </Grid>
                        
                    </Container>
                }
            </Grid>
        </Fragment>
    )
};

export default MovieDetails;
