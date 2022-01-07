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
import useStyles from '../Styles/LandingPageStyles'



export default function LandingPage () {
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

            <div className={classes.header}>
                <IconButton
                    className={classes.hamburger}
                    onClick={handleAccordianOpen}
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Link className={classes.homeButton}>SpellMound</Link>
                <div className={classes.linkBox}>
                    <Link className={classes.homeLink}>Home</Link>
                    <Link className={classes.link}>Login</Link>
                    <Link className={classes.link}>Register</Link>
                    <Link className={classes.link}>About</Link>
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
                                Login
                            </Link >
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to='/' onClick={handleAccordianClose} >
                                Register
                            </Link>
                        </ListItemText>
                    </ListItem >
                    <ListItem className={classes.listItem}>
                        <ListItemText>
                            <Link className={classes.drawerLink} to='/' onClick={handleAccordianClose} >
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <div className={classes.body}>
                <Typography variant='h3' className={classes.title}>SpellMound</Typography>
                <div className={classes.bodyTextBox}>
                    <Typography variant='body1' className={classes.bodyText}>
                        Welcome to SpellMound! An easy way to visualize and display 5e spells & cantrips so you spellcasters can smash the competition on the way to victory!
                    </Typography>
                </div>
                <Link exact to='/home' className={classes.getStartedButton}>Get Started</Link>
            </div>
            <div className={classes.footer}>
                <Typography variant='h5' className={classes.footerText}>© 2021</Typography>
            </div>
        </div >


    )
}
