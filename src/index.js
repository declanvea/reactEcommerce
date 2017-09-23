import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Masters from './components/Masters';
import Usopen from './components/Usopen';
import Open from './components/Open';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/masters' component={Masters}/>
        <Route path='/thankyou' component={ThankYou}/>
        <Route path='/usopen' component={Usopen}/>
        <Route path='/open' component={Open}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
