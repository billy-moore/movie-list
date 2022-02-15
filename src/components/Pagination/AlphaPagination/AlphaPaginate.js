import React from 'react'

import { Button, Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const AlphaPaginate = ( props ) => {

    const LaPaginator = props.alpha.map((letter, index) => 
        <Grid item key={letter} index={index+1}>
            <Button  
                name={letter} 
                onClick={ () => props.letterClicked( letter ) } 
                size='small'>
                    {letter}
            </Button>
        </Grid>
    )

    return (
        <Grid container justifyContent='center' alignContent='center'>
            <Grid item>
                <Button size='small' disabled={props.current !== 'A' ? false : true}>
                    <ArrowBackIosIcon />
                </Button>
            </Grid>
            { LaPaginator }
            <Grid item>
                <Button size='small' disabled={props.current !== 'Z' ? false : true}>
                    <ArrowForwardIosIcon />
                </Button>
            </Grid>

        </Grid>
    )
}

export default AlphaPaginate