import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Spellcard from './Spellcard';
import EditBar from './EditBar';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

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

    },
    spellboard: {
        height: '90%',
        width: '100%',
        maxWidth: '1467px',
        margin: '4rem',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#f5f3f4',
        border: `5px solid ${theme.palette.main.blood}`,
        opacity: 1,
        backgroundImage: 'radial-gradient(#660708 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(#660708 0.8500000000000001px, #f5f3f4 0.8500000000000001px)',
        backgroundSize: '34px 34px',
        backgroundPosition: '0 0,17px 17px',
        fontFamily: 'Roboto, Helvetica, sans-serif'
    },
    editbarContainer: {
        height: '98px',
        [theme.breakpoints.down('sm')]: {

        }
    },
    spellcardContainer: {
        height: '92%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll'
    },
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px'
    },
}));

export default function LargeSpellCard () {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <div className={classes.spellboard}>
                    <div className={classes.spellcardContainer}>
                    </div>
                </div>

            </div >
            <Footer className={classes.footer} />
        </div>
    )
}
