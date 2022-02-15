import React, { useState } from 'react'
import { AppBar, Button, Container, Grow, Paper, Grid, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
//import ChipInput from 'material-ui-chip-input'

import { getMoviesBySearch } from '../../actions/movies'

import Pagination from '../../components/Pagination/Pagination'

import useStyles from './styles'

import Movies from '../Movies/Movies'

//import Form from '../Form/Form'


// function useQuery() {
//     return new URLSearchParams(useLocation().search)
// }

const Home = () => {
    const dispatch = useDispatch()
    // const location = useLocation()
    // const query = useQuery()
    const navigate = useNavigate()
    const [ searchTerm, setSearch ] = useState('')
    const classes = useStyles()
    const page = useSelector((state) => state.movies.page)

    const handleKeyPress = (e) => {
        if(e.keyCode === 13 || e.keyCode === 76 ) { //Keycode 13 = Enter
            // search post
            searchMovies()
        }
    }

    // const handleAdd = ( tag ) => {
    //     setTags([ ...tags, tag ])
    // }

    // const handleDelete = ( tagToDelete ) => {
    //     setTags(tags.filter((tag) => tag !== tagToDelete))
    // }

    const searchMovies = () => {
        
        if( searchTerm.trim() ){
            dispatch( getMoviesBySearch( searchTerm ) ) 
            navigate(`/search/?searchQuery=${ searchTerm || 'none'}`)
            
        } else {
            navigate('/movies')
        }
    }


    return (
        <Grow in >
            <Container maxWidth='xl'  >
                <Grid container spacing={2} >
                <Grid item xs={1} sm={6}></Grid>
                    <Grid item xs={12} sm={6} >
                        <AppBar className={ classes.appBarSearch } position='static' color='inherit'>
                                <TextField 
                                    name='search'
                                    variant='outlined'
                                    label='Search' 
                                    fullWidth
                                    onKeyPress={ handleKeyPress }
                                    value={ searchTerm }
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ margin: '10px 0'}}
                                />
                                {/* <ChipInput 
                                    style={{ margin: '10px 0'}}
                                    value={ tags }
                                    onAdd={ handleAdd }
                                    onDelete={ handleDelete }
                                    label='Search Tags'
                                    variant='outlined'
                                /> */}
                                <Button onClick={ searchMovies } className={ classes.searchButton } color='primary' variant='contained'>Search</Button>
                        </AppBar>
                    </Grid>
                    
                    <Grid container item xs={12} spacing={1} justifyContent='center'>
                        <Movies />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Pagination
                            className={ classes.pagination }
                            page={ page }
                        />
                    </Grid>
                    
                        {/* <Form /> */}
                </Grid>
            </Container>          
        </Grow>
    )
}

export default Home
