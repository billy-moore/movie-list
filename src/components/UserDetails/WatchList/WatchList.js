import React from 'react'

import { Grid, Paper } from '@material-ui/core'

const WatchList = () => {
    return (
        <Grid item xs={12}>
            <Paper
                elevation={5}
                style={{ padding: '1rem' }}              
                >
                Watch List
            </Paper>
        </Grid>

    )
}

export default WatchList