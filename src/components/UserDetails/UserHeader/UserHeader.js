import React from 'react'

import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

const UserHeader = ({ name, avatar }) => {
    return (
        <Grid item xs={12}>
                <Paper
                    elevation={5}
                    style={{ width: '100%'}}
                >
                    <Grid 
                    container 
                    spacing={2}
                    style={{
                        padding: '1rem',
                    }}
                    >
                    <Grid container item justifyContent='center'>
                        <Avatar style={{ width: 100, height: 100 }} alt={ `${name} image` } src={ avatar || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                    </Grid>
                    
                    <Grid container item xs={ 12 } md={ 8 } justifyContent='center'>
                        <Grid item xs={12}>
                            <Typography variant='h4' style={{ textAlign: 'center' }}>
                            {name}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Paper>
                </Grid>
    )
}

export default UserHeader