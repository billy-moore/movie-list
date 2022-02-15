import React from 'react';

import { Grid } from '@material-ui/core'
import Movies from '../Movies/Movies'

const Search = () => {
    return (
        <Grid container item xs={12} spacing={1} justifyContent='center'>
            <Movies />
        </Grid>
    )
};

export default Search;
