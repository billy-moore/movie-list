import React from 'react'

import { Button, Grid, Paper } from '@material-ui/core' 
import { useDispatch } from 'react-redux'

import { removeDrink } from '../../../actions/auth'

const DrinkList = ( { list }) => {
    const dispatch = useDispatch()
    const removeDrink = ( drink ) => {
        console.log( drink )
        dispatch( removeDrink( drink ))
    }
    return (
        <Grid item xs={12}>
            <Paper
                elevation={5}
                style={{ padding: '1rem'}}        
                >
                {list.length > 0 ? list.map((drink, index) => (
                        <Paper  key={ index } >
                            { drink }
                            <Button variant='contained' color='secondary' onClick={(e) => removeDrink( drink )}>Remove</Button>
                        </Paper> 
                ))
            : 'Drink List'
            }
            
            </Paper>
        </Grid>
    )
}

export default DrinkList