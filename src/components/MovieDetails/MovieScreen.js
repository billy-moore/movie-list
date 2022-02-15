import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
//import { useDispatch, useSelector } from 'react-redux'

const MovieScreen = ({ title, poster_path, backdrop_path, release_date, vote_average, overview, tagline, runtime}) => {
    const IMG_API = 'https://image.tmdb.org/t/p/original'
    const SM_IMG = 'https://image.tmdb.org/t/p/w200'
    
    return (
        <Grid item>
        <Paper
            style={{
                backgroundImage: `radial-gradient(rgba(194, 24, 91, 0.4), rgba(49, 27, 146, 0.2)), url(${IMG_API + backdrop_path})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'top right',
                backgroundSize: 'cover',
            }}
            elevation={5}
            >
            <Grid 
                container 
                spacing={2}
                style={{
                    padding: '1rem',
                }}
            >
                <Grid container item xs={12} md={ 4 } justifyContent='center'>
                        <img alt={ `${title} poster` } src={SM_IMG + poster_path || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                </Grid>
                
                <Grid container item xs={ 12 } md={ 8 } alignContent='center' justifyContent='center'>

                    <Grid item xs={12} style={{ backgroundColor: 'rgb(49, 27, 146)', borderRadius: '10px 10px 0 0'}}>
                        <Typography variant='h4' style={{ padding: '.8rem', color: 'rgb(233, 30, 99)' }}>
                            {title}
                        </Typography>
                    
                    </Grid>

                    <Grid item xs={4} style={{ backgroundColor: 'rgb(63, 81, 181)', textAlign: 'center ', color: 'white', }}>
                        <Typography variant='caption' style={{ color: 'rgb(253, 216, 53)'}}>
                            Released: 
                        </Typography>
                        <Typography variant='body1'>
                                {release_date && release_date.slice(0,4)}
                            </Typography>
                    </Grid>

                    <Grid item xs={4} style={{ backgroundColor: 'rgb(63, 81, 181)', textAlign: 'center ', color: 'white'}}>
                        <Typography variant='caption' style={{ color: 'rgb(253, 216, 53)'}}>
                            User Score:
                        </Typography>
                            <Typography variant='body1'>
                                {vote_average}
                            </Typography>
                        
                    </Grid>

                    <Grid item xs={4} style={{ backgroundColor: 'rgb(63, 81, 181)', textAlign: 'center ', color: 'white'}}>
                        <Typography variant='caption' style={{ color: 'rgb(253, 216, 53)'}}>
                            Runtime: 
                        </Typography>
                        <Typography variant='body1' >
                            {runtime + ' mins'}
                        </Typography>
                    </Grid>

                    <Grid item sm={12}>
                        <Typography variant='body1' style={{ backgroundColor: 'rgba(84, 110, 122, .7)', color: 'white', display: 'flex', justifyContent: 'center', padding: '1rem', overflow: 'auto' }}>
                            { overview }
                        </Typography>
                    </Grid>

                    <Grid container item sm={12} style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem', backgroundColor: 'rgb(194, 24, 91)', color: 'rgb(26, 35, 126)', borderRadius: '0 0 10px 10px'}}>
                        <Typography variant='h6' style={{ fontWeight: 700}}>
                            { tagline }
                        </Typography>
                    </Grid>
            </Grid>
        </Grid>
        </Paper>
        </Grid>
    )
}
export default MovieScreen
