import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    backdrop: {
        backgroundColor: 'blue',
        backgroundSize: 'cover',
    },
    appBarSearch: {
        //borderRadius: 4,
        //marginbottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        //borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        }
    }
}))