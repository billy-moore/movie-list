import React, { useState } from 'react'

import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: '', 
    })
    
    const classes = useStyles()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('watsup')
    }

    const clear = () => {
        console.log('here I am')
    }

    return (
        <Paper className = { classes.paper }>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                <Typography variant='h6'>Review</Typography>
                <TextField 
                    name='creator' 
                    variant='outlined' 
                    label='Creator' 
                    fullWidth 
                    value={ postData.creator }
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />

                <TextField 
                    name='title' 
                    variant='outlined' 
                    label='Title' 
                    fullWidth 
                    value={ postData.title }
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />

                <TextField 
                    name='message' 
                    variant='outlined' 
                    label='Message' 
                    fullWidth 
                    value={ postData.message }
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />

                <TextField 
                    name='tags' 
                    variant='outlined' 
                    label='Tags' 
                    fullWidth 
                    value={ postData.tags }
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />

                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
            </form>
            <Button
                className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>
                    Submit
            </Button>
            <Button
                className={classes.buttonSubmit} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
                    Clear
            </Button>
        </Paper>
    )
}

export default Form
