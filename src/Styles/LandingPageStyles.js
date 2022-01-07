import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Roboto, Helvetica, sans-serif',
        backgroundImage: "url('pics/Dungeon.jpg')",
        display: 'flex',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    },
    header: {
        paddingTop: '1.5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'start'
        },
    },
    hamburger: {
        color: theme.palette.main.lightGrey,
        marginLeft: '1rem',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    homeButton: {
        margin: 0,
        padding: 0,
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        fontSize: '1.8rem',
        width: '22%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '4rem'
        },
    },
    linkBox: {
        height: '100%',
        width: '22%',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },

    },
    link: {
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        fontSize: '1.2rem',
        transition: '200ms ease-in-out',
        marginLeft: '0.7rem',
        '&:hover': {
            borderBottom: `3px solid ${theme.palette.main.blood}`,
        }
    },
    homeLink: {
        textDecoration: 'none',
        color: theme.palette.main.darkRed,
        fontSize: '1.2rem',
        transition: '200ms ease-in-out',
        borderBottom: `3px solid ${theme.palette.main.lightGrey}`,
    },
    body: {
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: '2.5rem',
        color: theme.palette.main.lightGrey,
        marginBottom: '1rem',
    },
    bodyTextBox: {
        width: '292px',
        backgroundColor: 'rgb(22, 26, 29, 0.7)',
        color: theme.palette.main.grey,
        textAlign: 'justify',
        padding: '0.5rem 1rem 0.5rem 1rem',
        borderRadius: '5px',
    },
    getStartedButton: {
        backgroundColor: theme.palette.main.blood,
        marginTop: '1rem',
        borderRadius: '3px',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        transition: '200ms ease-in-out',
        '&:hover': {
            color: theme.palette.main.darkRed,
            backgroundColor: theme.palette.main.charcoal,
            fontWeight: '700',
            transform: 'translate(2px, 1px)'
        },

    },
    footer: {
        marginTop: 'auto',
        color: theme.palette.main.darkGrey,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '1rem',
    },
    footerText: {
        fontSize: '1rem'
    },
    drawer: {
        backgroundColor: theme.palette.main.charcoal,
    },
    toolbar: {
        backgroundColor: theme.palette.main.charcoal,
        color: theme.palette.main.lightGrey
    },
    menuTitle: {
        marginLeft: '8%',
        marginTop: '1.5rem',
        fontSize: '1.8em',
    },
    upArrow: {
        marginTop: '1.5rem',
        color: 'inherit'
    },
    listItem: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
    },
    drawerLink: {
        color: theme.palette.main.lightGrey,
        textDecoration: 'none',
        marginLeft: '2rem',
    },
}));

export default useStyles;
