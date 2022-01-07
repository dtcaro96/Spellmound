import React from 'react'
import EditBar from './EditBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 133.5px)',
        [theme.breakpoints.up('md')]: {
            minHeight: 'calc(100vh - 119.5px)'
        },
    },
    h1: {
        margin: '0'
    }
}));

export default function HomePage () {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <EditBar />
            <h1 className={classes.h1}>Hello!</h1>
        </div>
    )
}
