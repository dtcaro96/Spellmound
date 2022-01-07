import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.main.blood,
        color: theme.palette.main.lightRed,
        height: '80px',
        fontFamily: 'Roboto, Helvetica, sans-serif',
        display: 'flex',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    mainBox: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    linkBorder: {
        height: '70%',
        display: 'flex',
        borderRadius: '10px',
        paddingLeft: '2rem',
        backgroundColor: theme.palette.main.green,
        paddingRight: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '200ms ease-in-out',
        boxShadow: `2px 2px 5px ${theme.palette.main.charcoal}`,
        '&:hover': {
            color: theme.palette.main.grey,
            backgroundColor: theme.palette.main.lightGreen,
            fontWeight: '700',
            transform: 'translate(2px, 2px)',
            cursor: 'pointer',
            boxShadow: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            height: '60%'
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        fontSize: '1.2rem',
        paddingBottom: '0.2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        }
    },
    hamburgerContainer: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        color: theme.palette.main.lightGrey,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '3rem',
    },
    hamburger: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    drawer: {
        backgroundColor: theme.palette.main.blood,
        color: theme.palette.main.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    toolbar: {
        backgroundColor: theme.palette.main.blood,
        color: theme.palette.main.lightGrey
    },
    downIcon: {
        color: theme.palette.main.lightGrey,
        marginLeft: '1rem',
        marginTop: '1rem'
    },
    drawerLink: {
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        display: 'flex',
        justifyContent: 'center',
        minWidth: '9rem',
        backgroundColor: theme.palette.main.green,
        padding: '0.5rem 1rem 0.5rem 1rem',
        borderRadius: '10px',
        boxShadow: `2px 2px 5px ${theme.palette.main.charcoal}`,
    },
    drawerLinkBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    cancelLink: {
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        fontSize: '1.2rem',
        paddingBottom: '0.2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        }
    },
    cancelLinkBorder: {
        height: '70%',
        display: 'flex',
        borderRadius: '10px',
        paddingLeft: '2rem',
        backgroundColor: theme.palette.main.red,
        paddingRight: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '200ms ease-in-out',
        boxShadow: `2px 2px 5px ${theme.palette.main.charcoal}`,
        '&:hover': {
            color: theme.palette.main.grey,
            backgroundColor: theme.palette.main.darkRed,
            fontWeight: '700',
            transform: 'translate(2px, 2px)',
            cursor: 'pointer',
            boxShadow: 'none'
        },
    },
    searchInput: {
        width: '40%',
        height: '3rem',
        borderRadius: '5px',
        fontSize: '1.3rem'
    },
    passiveMenuIcon: {
        color: theme.palette
    },
    passiveMenuIconContainer: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        color: theme.palette.main.lightGrey,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '3rem',
    },
    drawerInputBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerInput: {
        width: '80%',
        height: '3rem',
        borderRadius: '5px',
        fontSize: '1.3rem'
    },
    cancelDrawerLink: {
        textDecoration: 'none',
        color: theme.palette.main.lightGrey,
        display: 'flex',
        justifyContent: 'center',
        minWidth: '9rem',
        backgroundColor: theme.palette.main.red,
        padding: '0.5rem 1rem 0.5rem 1rem',
        borderRadius: '10px',
        boxShadow: `2px 2px 5px ${theme.palette.main.charcoal}`,
    },
    cancelDrawerLinkBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    displayNone: {
        display: 'none'
    }
}));


export default function EditBar () {
    const classes = useStyles();
    const [state, setState] = useState({
        open: false,
        searchOpen: false
    })

    return (
        <div className={classes.root}>
            <div className={state.searchOpen ? classes.displayNone : classes.mainBox}>
                <div className={classes.linkBorder} onClick={() => setState({ ...state, searchOpen: true })}>
                    <Link className={classes.link} >Add Spell</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link className={classes.link}>Create SpellBoard</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link className={classes.link}>My SpellBoards</Link>
                </div>
                <div className={classes.linkBorder}>
                    <Link className={classes.link}>Logout</Link>
                </div>
                <div className={classes.hamburgerContainer}>
                    <MenuIcon className={classes.hamburger} onClick={() => setState({ ...state, open: true })} />
                </div>
            </div>
            <div className={state.searchOpen ? classes.searchContainer : classes.displayNone}>
                <div className={classes.cancelLinkBorder} onClick={() => setState({ ...state, searchOpen: false })}>
                    <Link className={classes.cancelLink}>Cancel</Link>
                </div>
                <input type='text' className={classes.searchInput} />
                <div className={classes.linkBorder} onClick={() => setState({ ...state, searchOpen: false })}>
                    <Link className={classes.link}>Search</Link>
                </div>
            </div>
            <div className={state.searchOpen ? classes.passiveMenuIconContainer : classes.displayNone}>
                <MenuIcon className={classes.passiveMenuIcon} />
            </div>

            <Drawer
                variant="temporary"
                anchor="bottom"
                open={state.open}
                classes={classes.drawer}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        onClick={() => setState({ ...state, open: false })}
                        aria-label="menu"
                        className={classes.upArrow}
                    >
                        <ExpandMoreIcon className={classes.downIcon} />
                    </IconButton>
                </Toolbar>
                <List className={classes.drawer}>
                    <ListItem className={state.searchOpen ? classes.displayNone : classes.listItem}>
                        <ListItemText>
                            <div className={classes.drawerLinkBorder}>
                                <Link className={classes.drawerLink} onClick={() => setState({ ...state, searchOpen: true })}>
                                    Add Spell
                                </Link >
                            </div>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={state.searchOpen ? classes.displayNone : classes.listItem}>
                        <ListItemText>
                            <div className={classes.drawerLinkBorder}>
                                <Link className={classes.drawerLink} onClick={() => setState({ ...state, open: false })}>
                                    Create Spellboards
                                </Link >
                            </div>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={state.searchOpen ? classes.displayNone : classes.listItem}>
                        <ListItemText>
                            <div className={classes.drawerLinkBorder}>
                                <Link className={classes.drawerLink} onClick={() => setState({ ...state, open: false })}>
                                    My Spellboards
                                </Link>
                            </div>
                        </ListItemText>
                    </ListItem >
                    <ListItem className={state.searchOpen ? classes.displayNone : classes.listItem}>
                        <ListItemText>
                            <div className={classes.drawerLinkBorder}>
                                <Link className={classes.drawerLink} onClick={() => setState({ ...state, open: false })}>
                                    Logout
                                </Link>
                            </div>
                        </ListItemText>
                    </ListItem>



                    <ListItem className={state.searchOpen ? classes.listItem : classes.displayNone}>
                        <ListItemText>
                            <div className={classes.drawerLinkBorder}>
                                <Link className={classes.drawerLink} onClick={() => setState({ ...state, searchOpen: false })}>
                                    Search
                                </Link>
                            </div>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={state.searchOpen ? classes.drawerInputBox : classes.displayNone}>
                        <input type='text' className={classes.drawerInput} />
                    </ListItem>
                    <ListItem className={state.searchOpen ? classes.listItem : classes.displayNone}>
                        <ListItemText>
                            <div className={classes.cancelDrawerLinkBorder}>
                                <Link className={classes.cancelDrawerLink} onClick={() => setState({ ...state, searchOpen: false })}>
                                    Cancel
                                </Link>
                            </div>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
