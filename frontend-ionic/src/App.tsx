import Menu from './components/shared/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import './App.scss';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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

import { ModalProvider } from './store/contexts/ModalContext';
import { AppUserProvider } from './store/contexts/AuthContext';

/* Theme variables */
import './theme/variables.scss';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <AppUserProvider>
        <IonApp className="dark-background">
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route path="/page/:name" component={Page} exact />
                {/* <Redirect from="/" to="/page/Inbox" exact /> */}
              </IonRouterOutlet>
            </IonSplitPane>
            <IonRouterOutlet>
              <Route path="/" component={Home} exact />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </AppUserProvider>
    </ModalProvider>
  );
};

export default App;
