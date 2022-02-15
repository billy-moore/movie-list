import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    moviePaper: {
        borderTopRightRadius: '20px',
    },
    
    imgContainer: {
        display: 'block',
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        borderTopRightRadius: '20px',
        backgroundColor: '#311B92'

    },
    movieImg: {
        width: '100%',
        borderTopRightRadius: '20px',
    },

    movieTag: {
        padding: '.3rem',
        backgroundColor: '#E91E63',
        position: 'absolute',
        bottom: '3px',
        left: '0px',
        fontWeight: 900
    },

    titleText: {
        display: 'grid',
        textAlign: 'left',
        padding: '1rem',
        alignContent: 'center',
        height: '5rem',
        backgroundColor: '#311B92', 
        color: '#FFFFFF'
    },

    content: {
        display: 'none',
    },

    imgHovered: {
        display: 'none',
    },

    contentHovered: {
        visibility: 'block',
        height: '17rem'
    },

    contentTitle: {
        fontWeight: 900,
        padding: '1rem',
        lineHeight: '1.2rem',
        backgroundColor: '#311B92',
        color: 'white',
    },

    contentContainer: {
        height: '10rem',
        minHeight: '10rem',
        overflow: 'auto'
    },
    
    contentText: {
        padding: '1rem',
    },

    contentSubInfo: {
        backgroundColor: '#5E35B1',
        color: 'white'
    },

    contentSubInfoTwo: {
        backgroundColor: '#311B92',
        color: 'white',
        width: '100%',
        position: 'absolute',
        bottom: 0
        // display: 'grid',
        // jusitfyContent: 'center',
        // alignContent: 'center'
    }
}))

