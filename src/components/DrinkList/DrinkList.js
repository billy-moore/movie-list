import React, { useEffect, useState } from 'react'
import { AppBar, Button, Container, Grow, Typography, Grid, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//import Pagination from '../Pagination/Pagination'
import { getDrinksList } from '../../actions/cocktails'

import useStyles from '../Home/styles'
import Drinks from './Drinks/Drinks'
import AlphaPaginate from '../Pagination/AlphaPagination/AlphaPaginate'

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const DrinkList = () => {
    // const location = useLocation()
    // const query = useQuery()
    const navigate = useNavigate()
    const { list } = useSelector((state) => state.drinks)
    const [currentLetter, setCurrentLetter] = useState('A')
    const dispatch = useDispatch()


    // const classes = useStyles()

    // const handleKeyPress = (e) => {
    //     console.log('keypress')
    // }

    // const searchClick = () => {
    //     console.log( list )
    // }

    const changePages = ( letter, index ) => {
        setCurrentLetter(prev => prev = letter)
        navigate(`/drinks/letter=${ letter }`)
       // console.log( 'drinkList', letter)
        dispatch( getDrinksList( letter ))
    }

    useEffect(() => {
        dispatch( getDrinksList( currentLetter ))
    }, [dispatch, currentLetter ])
    
    return (
        <Grow in >
            <Container maxWidth='xl'  >
                <Grid container spacing={2} >
                <Grid item xs={1} sm={6}></Grid>
                    <Grid item xs={12} sm={6} >
                        {/* <AppBar className={ classes.appBarSearch } position='static' color='inherit'>
                                <TextField 
                                    name='search'
                                    variant='outlined'
                                    label='Search' 
                                    fullWidth
                                    onKeyPress={ handleKeyPress }
                                    
                                    //onChange={(e) => setSearch(e.target.value)}
                                    style={{ margin: '10px 0'}}
                                />
                                <Button onClick={ searchClick } className={ classes.searchButton } color='primary' variant='contained'>Search</Button>
                        </AppBar> */}
                    </Grid>
                    <Grid item xs={12}>
                        <AlphaPaginate 
                            alpha= { alphabet }
                            letterClicked = { ( letter, index ) => changePages( letter , index) }
                            current={ currentLetter }
                        />
                    </Grid>
                    
                    <Grid container item xs={12} spacing={1} justifyContent='center'>
                        { list ? <Drinks 
                            list={ list }
                        /> :
                        <Typography variant='h6'>We're sorry, but there doesn't appear to be any drinks by that name</Typography>
                        }
                    </Grid>
                    </Grid>
            </Container>          
        </Grow>
    )
}

export default DrinkList