import React from 'react'

import { Grid, Paper } from '@material-ui/core' 
const DrinkList = ( { list }) => {

    return (
        <Grid item xs={12}>
            <Paper
                elevation={5}
                style={{ padding: '1rem' }}        
                >
                {list.length > 0 ? list.map((drink, index) => (
                    <Paper key={ index }>
                        { drink }
                    </Paper>   
                ))
            : 'Drink List'
            }
            </Paper>
        </Grid>
    )
}

export default DrinkList