import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 134.5px)',
        [theme.breakpoints.up('md')]: {
            minHeight: 'calc(100vh - 121.5px)'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundImage: "url('pics/RockWall.jpg')",
        fontFamily: 'Roboto, Helvetica, sans-serif'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        height: '20rem',
        margin: '0',
        color: theme.palette.main.lightGrey,
        backgroundColor: 'rgb(22, 26, 29, 0.8)',
        padding: '0',
        [theme.breakpoints.up('xs')]: {
            width: '95%',
            marginLeft: '1rem',
            marginRight: '1rem',
            height: '25rem'
        },
        [theme.breakpoints.up('sm')]: {
            width: '85%'
        },
        [theme.breakpoints.up('md')]: {
            width: '600px',
        },
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(22, 26, 29, 0.8)',
        color: theme.palette.main.lightGrey,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: '50%',
            alignItems: 'center'
        },
    },
    newButton: {
        backgroundColor: theme.palette.main.green,
        borderRadius: '3px',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '1.2rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        transition: '200ms ease-in-out',
        '&:hover': {
            color: theme.palette.main.grey,
            backgroundColor: theme.palette.main.lightGreen,
            fontWeight: '700',
            transform: 'translate(2px, 1px)',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem'
        },
    },
    copyButton: {
        backgroundColor: theme.palette.main.blood,
        borderRadius: '3px',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '1.2rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        transition: '200ms ease-in-out',
        '&:hover': {
            color: theme.palette.main.grey,
            backgroundColor: theme.palette.main.darkRed,
            fontWeight: '700',
            transform: 'translate(2px, 1px)',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
        },
    },
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px'
    },
}));

export default function ChooseCreate () {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <div className={classes.card}>
                    <Typography variant='h4' className={classes.title}>Welcome To The SpellBoard Creator!</Typography>
                    <Typography variant="body2" className={classes.paragraph}>
                        This is where you'll create a Spellboard for a character of your choosing. Either build one from scratch or copy one from an old character.
                    </Typography>
                    <div className={classes.buttonBox}>
                        <Link exact to='/newspellboard' className={classes.newButton}>New SpellBoard</Link>
                        <Link className={classes.copyButton}>Copy Old SpellBoard</Link>
                    </div>
                </div>
            </div >
            <Footer className={classes.footer} />
        </div>

    )
}
