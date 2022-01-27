import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    spellcard: {
        height: '15rem',
        width: '15rem',
        display: 'flex',
        margin: '1rem',
        flexDirection: 'column',
        borderRadius: '10px',
        alignItems: 'center',
        backgroundColor: '#f5f3f4',
        border: `3px solid ${theme.palette.main.blood}`,
        opacity: 1,
        fontFamily: 'Roboto, Helvetica, sans-serif',
        boxShadow: `1px 1px 3px ${theme.palette.main.charcoal}`,
    },
    topContainer: {
        display: 'flex',
        height: '25%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        height: '100%',
        display: 'flex',
        width: '22%',
    },
    logo: {
        transform: 'scale(0.7)',
        margin: '0'
    },
    titleContainer: {
        display: 'flex',
        width: '78%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textDecoration: 'none',
        fontSize: '1.4rem',
        color: theme.palette.main.charcoal
    },
    midContainer1: {
        display: 'flex',
        height: '25%',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.palette.main.charcoal,
        borderTop: `1px solid ${theme.palette.main.charcoal}`,
    },
    midContainer2: {
        display: 'flex',
        height: '25%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.palette.main.charcoal,
    },
    bottomContainer: {
        display: 'flex',
        height: '25%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.palette.main.charcoal,
    },
    span: {
        fontWeight: '700',
    }
}));

export default function Spellcard () {
    const classes = useStyles();
    return (
        <div className={classes.spellcard}>
            <div className={classes.topContainer}>
                <div className={classes.logoContainer}>
                    <img className={classes.logo} src='pics/Evocation.png'></img>
                </div>
                <div className={classes.titleContainer}>
                    <Link className={classes.title} to='/spellcard'>Eldritch Blast</Link>
                </div>
            </div>
            <div className={classes.midContainer1}>
                <Typography variant="body"><span className={classes.span}>Time: </span>1A</Typography>
                <Typography variant="body"><span className={classes.span}>Range: </span>120 ft.</Typography>
            </div>
            <div className={classes.midContainer2}>
                <Typography variant="body"><span className={classes.span}>Cmpnts: </span>V/S</Typography>
                <Typography variant="body"><span className={classes.span}>Type: </span>Ranged</Typography>
            </div>
            <div className={classes.bottomContainer}>
                <Typography variant="body"><span className={classes.span}>Dmg-Type: </span>Force</Typography>
            </div>
        </div>
    )
}
