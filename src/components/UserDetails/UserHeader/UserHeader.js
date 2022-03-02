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
                        <Avatar style={{ width: 100, height: 100 }} alt={ `${name} image` } src={ avatar }>{name[0]}</Avatar>
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