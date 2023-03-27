import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

import Home from './pages/Home';
import Project from './pages/Project';
import Login from './pages/Login';
import Area from './pages/Area';
import People from './pages/People';
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

/* Theme variables */
import './theme/variables.css';
import ViewArea from './pages/ViewArea';
import ViewPro from './pages/ViewProject';
import Register from './pages/Register';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
        <Menu />
          <IonRouterOutlet id="main">
       
            <Route path="/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/page/Project" exact={true}>
              <Project />
            </Route>
            <Route path="/page/Area" exact={true}>
              <Area />
            </Route>
            <Route path="/page/People" exact={true}>
              <People />
            </Route>
            <Route path="/Register" exact={true}>
              <Register />
            </Route>
            <Route path="/page/Area/:id" exact={ true }>
						<ViewArea />
					</Route>
          <Route path="/page/Project/:id" exact={ true }>
						<ViewPro />
					</Route>
          </IonRouterOutlet>
        </IonSplitPane>
        <Route path="/" exact={true}>
              <Login />
            </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
