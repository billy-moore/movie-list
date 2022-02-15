import React, { useState } from 'react'

import { ButtonBase, Paper, Typography} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMovie } from '../../../actions/movies'

import StarIcon from '@material-ui/icons/Star'; 
import useStyles from './styles'

import StockMovie from '../../../images/stock-movie-image.jpeg'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({ movie }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const [isHovered, setIsHovered] = useState(false)

    const openMovie = () => {
        navigate(`/movie/${ movie.id }`)
        dispatch( getMovie( movie.id ) )
    }

    const hoverCard = async ( event ) => {
        event.preventDefault()
        setIsHovered(prev => !prev)
    }

    //const releaseDate = movie.release_date && movie.release_date.slice(0,4).toString()

    return (
        <ButtonBase
            centerRipple
            //className={ classes.cardAction }
            onClick={ openMovie }
        > 
            <Paper 
                className={ classes.moviePaper }
                onMouseEnter={ hoverCard }
                onMouseLeave={ hoverCard }>
                <div className={ isHovered ? classes.imgHovered : classes.imgContainer} >
                    <img 
                        src={ movie.backdrop_path ? `${IMG_API+movie.backdrop_path}` : StockMovie } 
                        alt={movie.title} 
                        className={ classes.movieImg } />
                    
                    <Typography
                        className={ classes.movieTag }>
                            { isHovered ? 'Date' : 'Movie' }
                    </Typography>
                </div>
                <div className={ isHovered ? classes.imgHovered : undefined }>
                <Typography variant='h5' className={ classes.titleText}>
                    {movie.title}
                </Typography>
                </div>
                
                
                <div className={ isHovered ? classes.contentHovered : classes.content }>
                    <Typography variant='h6' className={ classes.contentTitle }>
                        {movie.title}
                    </Typography>
                    <div className={ classes.contentContainer}>
                        <Typography variant='body1' className={ classes.contentText }>
                            {movie.overview}
                        </Typography>
                        
                        
                    </div>          
                    <div className={ classes.contentSubInfoTwo }>
                            <Typography variant='subtitle1' className={ classes.contentSubInfo }>
                                Released: {movie.release_date && movie.release_date.slice(0,4)}
                            </Typography>
                            <Typography variant='body1'>
                                rating: {movie.vote_average} <StarIcon fontSize='inherit' />
                            </Typography>
    
                    </div>
                </div>
                
        </Paper>
        </ButtonBase>

    )
}

export default Movie
