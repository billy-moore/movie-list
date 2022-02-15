import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'

import { useDispatch, useSelector} from 'react-redux'
//* will need useSelector
import { getMovies} from '../../actions/movies'

import { Link, useNavigate } from 'react-router-dom'

import useStyles from './styles'

const Paginate = ( { page } ) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    //const state = useSelector((state) => state)
    const navigate = useNavigate()
    const { total_pages } = useSelector((state) => state.movies)

    useEffect(()=>{
        dispatch( getMovies( page ))
        //navigate(`/movies?page=${ page }`)
    }, [page, dispatch])

    const updatePage = (item) => {
        dispatch( getMovies( item.page ))
        navigate(`/movies?page=${ item.page }`)
    }

    return (
        <Pagination 
            classes={{ ul: classes.ul } }
            count={ total_pages }
            siblingCount={ 2 }
            page={ page || 1 }
           // variant='outlined'
           // color='primary'
            size='small'
            variant="outlined" 
            shape="rounded"
            renderItem={( item ) => (
                <PaginationItem { ... item} element={ Link } onClick={(e) => updatePage(item)} />
            )}
        />
    )
}

export default Paginate