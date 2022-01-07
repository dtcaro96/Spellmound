import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const useStyles = makeStyles((theme) => ({
    spellcard: {
        height: '15rem',
        width: '15rem',
        display: 'flex',
        margin: '1rem',
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#f5f3f4',
        border: `3px solid ${theme.palette.main.blood}`,
        opacity: 1,
        fontFamily: 'Roboto, Helvetica, sans-serif'
    },
}));

export default function Spellcard () {
    const classes = useStyles();
    return (
        <div className={classes.spellcard}>

        </div>
    )
}
