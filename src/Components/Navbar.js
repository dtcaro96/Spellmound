import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.main.black,
        color: theme.palette.main.lightRed,
        padding: '1rem',
        borderBottom: `1.5px solid ${theme.palette.main.lightRed}`,
        fontFamily: 'Roboto, Helvetica, sans-serif',
        display: 'flex',
    },
    hamburger: {
        color: theme.palette.main.lightGrey,
        marginLeft: '1rem',
        marginTop: '0',
        marginBottom: '0',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    homeButton: {
        margin: 0,
        padding: 0,
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        fontSize: '1.8rem',
        display: 'flex',
        marginLeft: '1rem',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            marginTop: '0.5rem'
        },
    },
    linkBox: {
        height: '100%',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: '1rem',
        right: 0,
        justifyContent: 'center',
        margin: 0,
        marginTop: '0.3rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.main.darkGrey,
        fontSize: '1.2rem',
        transition: '200ms ease-in-out',
        paddingBottom: '0.2rem',
        marginLeft: '1rem',
        '&:hover': {
            borderBottom: `3px solid ${theme.palette.main.blood}`,
        }
    },
    homeLink: {
        textDecoration: 'none',
        color: theme.palette.main.darkRed,
        fontSize: '1.2rem',
        paddingBottom: '0.2rem',
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
        marginBottom: '1rem'
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
        backgroundColor: theme.palette.main.black,
    },
    toolbar: {
        backgroundColor: theme.palette.main.black,
        color: theme.palette.main.lightGrey
    },
    menuTitle: {
        marginLeft: '8%',
        marginTop: '1.5rem',
        fontSize: '1.8em',
    },
    upArrow: {
        marginTop: '1.3rem',
        color: 'inherit',
        marginLeft: '0.6rem'
    },
    listItem: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    drawerLink: {
        color: theme.palette.main.darkGrey,
        textDecoration: 'none',
        marginLeft: '2rem',
    },
}));

export default function Navbar () {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleAccordianOpen = () => {
        setOpen(true);
    };
    const handleAccordianClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <IconButton
                className={classes.hamburger}
                onClick={handleAccordianOpen}
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Link exact to='/' className={classes.homeButton}>SpellMound</Link>
            <div className={classes.linkBox}>
                <div className={classes.linkBorder}>
                    <Link exact to='/' className={classes.homeLink}>Home</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link exact to='/home' className={classes.link}>Create SpellBoard</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link className={classes.link}>My SpellBoards</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link className={classes.link}>Logout</Link>
                </div>
            </div>
            <Drawer
                variant="temporary"
                anchor="top"
                open={open}
                classes={classes.drawer}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        onClick={handleAccordianClose}
                        aria-label="menu"
                        className={classes.upArrow}
                    >
                        <ExpandLessIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.menuTitle}>
                        SpellMound
                    </Typography>
                </Toolbar>
                <List className={classes.drawer}>
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to="/" onClick={handleAccordianClose}>
                                Home
                            </Link >
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to="/" onClick={handleAccordianClose}>
                                Create Spellboards
                            </Link >
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to='/' onClick={handleAccordianClose} >
                                My Spellboards
                            </Link>
                        </ListItemText>
                    </ListItem >
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to='/' onClick={handleAccordianClose} >
                                Logout
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
