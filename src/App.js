import React, { useEffect, useState } from 'react';
import '@fontsource/roboto';
import NewForm from './Components/NewForm';
import Spellboard from './Components/Spellboard';
import ChooseCreate from './Components/ChooseCreate';
import LandingPage from './Components/LandingPage';
import LargeSpellCard from './Components/LargeSpellCard';

import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh'
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    margin: 'none',
    padding: 'none'
  },
  noShow: {
    display: 'none'
  }

}));


const App = () => {

  //useStyles applies styles to components via classes
  const classes = useStyles();

  //This allows the view to be at the top of window when loading a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <div className={classes.app}>
        <Route exact>
          {/* // maxWidth on Container is set to false to stop MaterialUI from auto-enforcing a max-width */}

          <Switch>
            <Route
              exact
              path="/home"
              render={() => <ChooseCreate className={classes.root} />}
            ></Route>
            <Route
              exact
              path="/newspellboard"
              render={() => <NewForm className={classes.root} />}
            ></Route>
            <Route exact
              path="/"
              render={() => <LandingPage className={classes.root} />}
            ></Route>
            <Route exact
              path="/spellboard"
              render={() => <Spellboard className={classes.root} />}
            ></Route>
            <Route exact
              path="/spellcard"
              render={() => <LargeSpellCard className={classes.root} />}
            ></Route>
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;