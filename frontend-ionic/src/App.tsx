//issue
//not redirecting to home after logout or 404
import Menu from './components/shared/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import React, { Dispatch, useEffect } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import './App.scss';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { ModalProvider } from './store/contexts/ModalContext';
// import { AppUserProvider } from './store/contexts/AuthContext';

/* Theme variables */
import './theme/variables.scss';
import { myFirebase } from './firebase';
import { useDispatch } from 'react-redux';
import { IUserActions, removeUser } from './store/actions/userActions';

const App: React.FC = () => {
  const login: Boolean = false;
  const userDispatch = useDispatch<Dispatch<IUserActions>>();

  useEffect(() => {
    if (myFirebase.auth().currentUser === null) {
      userDispatch(removeUser());
    }
  });

  return (
    <IonApp className={login ? '' : 'dark-background'}>
      <IonReactRouter>
        <IonSplitPane contentId="main" disabled={true}>
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/dashboard/:name" component={Page} exact />
            <Route path="/" component={Home} exact />
            {login ? (
              <Redirect from="/" to="/dashboard/Inbox" exact />
            ) : (
              <Redirect from="/dashboard/*" to="/" exact />
            )}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
