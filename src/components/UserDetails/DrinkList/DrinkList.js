import React from 'react'

import { Grid, Paper } from '@material-ui/core' 
const DrinkList = () => {
    return (
        <Grid item xs={12}>
            <Paper
                elevation={5}
                style={{ padding: '1rem' }}        
                >
                Drink List
            </Paper>
        </Grid>
    )
}

export default DrinkList