import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
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
        backgroundColor: theme.palette.main.darkGrey,
        backgroundImage: "url('pics/RockWall.jpg')",
        fontFamily: 'Roboto, Helvetica, sans-serif'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: 'rgb(22, 26, 29, 0.8)',
        color: theme.palette.main.lightGrey,
        [theme.breakpoints.up('xs')]: {
            width: '95%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '85%'
        },
        [theme.breakpoints.up('md')]: {
            width: '550px',
        },
    },
    titleDiv: {
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem'
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem',
        marginBottom: '3rem',
        width: '100%',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            marginBottom: '1.5rem'
        },
    },
    inputDiv: {
        marginTop: '2rem',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem'
        },
    },
    label: {
        fontSize: '1.3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },
    },
    input: {
        height: '2rem',
        fontSize: '1.3rem',
        width: '16rem',
        backgroundColor: theme.palette.main.grey,
        borderRadius: '5px',
        '&:focus': {
            backgroundColor: theme.palette.main.white
        },
        [theme.breakpoints.down('xs')]: {
            width: '50%'
        },
    },
    descriptionInput: {
        fontSize: '1.3rem',
        width: '16rem',
        height: '7rem',
        backgroundColor: theme.palette.main.grey,
        borderRadius: '5px',
        '&:focus': {
            backgroundColor: theme.palette.main.white
        },
        [theme.breakpoints.down('xs')]: {
            width: '60%'
        },
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    submitButton: {
        border: 'none',
        backgroundColor: theme.palette.main.green,
        borderRadius: '3px',
        textDecoration: 'none',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '1.2rem',
        marginTop: '2rem',
        width: '7rem',
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        transition: '200ms ease-in-out',
        '&:hover': {
            color: theme.palette.main.grey,
            backgroundColor: theme.palette.main.lightGreen,
            fontWeight: '700',
            transform: 'translate(2px, 1px)',
            cursor: 'pointer'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
            marginTop: '1rem',
            height: '48px'
        },
    },
    cancelButton: {
        border: 'none',
        backgroundColor: theme.palette.main.blood,
        borderRadius: '3px',
        textDecoration: 'none',
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
        width: '112px',
        alignItems: 'center',
        padding: 0,
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
            marginTop: '1rem',
            height: '1rem'
        },
    },
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px'
    },
}));

export default function NewForm () {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <div className={classes.card}>
                    <div className={classes.titleDiv}>
                        <Typography variant='h4' className={classes.title}>New Spellboard</Typography>
                    </div>
                    <form className={classes.form}>
                        <div className={classes.inputDiv}>
                            <label className={classes.label} for='name'>Spellboard Name:</label>
                            <input className={classes.input} name='name' type='text' id='name' />
                        </div>
                        <div className={classes.inputDiv}>
                            <label className={classes.label} for='character'>Character Name:</label>
                            <input className={classes.input} name='character' type='text' id='character' />
                        </div>
                        <div className={classes.inputDiv}>
                            <label label className={classes.label} for='description'>Description:</label>
                            <textarea className={classes.descriptionInput} name='description' id='description' />
                        </div>
                        <div className={classes.buttonBox}>
                            <Link exact to='/spellboard'>
                                <button submit className={classes.submitButton}>Submit</button>
                            </Link>
                            <Link exact to='/home' className={classes.cancelButton}>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div >
            <Footer className={classes.footer} />
        </div>
    )
}
