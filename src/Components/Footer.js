import React from 'react'
import Typography from '@material-ui/core/Typography'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerText: {
        color: theme.palette.main.darkGrey,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
        marginRight: '3rem',
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },
    footer: {
        backgroundColor: theme.palette.main.black,
        borderTop: `1.5px solid ${theme.palette.main.lightRed}`,
    },
    icon: {
        marginRight: '0.45rem',
        textDecoration: 'none',
        color: theme.palette.main.darkGrey
    }
}));

export default function Footer () {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.footerText}>
                <Link className={classes.icon} exact to={{ pathname: 'https://instagram.com/dannyboycaro' }} target='_blank'>
                    <BsInstagram className={classes.icon} />
                </Link>
                <Link className={classes.icon} exact to={{ pathname: 'https://github.com/dtcaro96' }} target='_blank'>
                    <BsGithub className={classes.icon} />
                </Link>
                <Link className={classes.icon} exact to={{ pathname: 'https://www.linkedin.com/in/danny-caro-0/' }} target='_blank'>
                    <BsLinkedin className={classes.icon} />
                </Link>
                <Typography variant='title'>© 2021; Daniel Caro</Typography>
            </div>
        </div>

    )
}