import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createRouters from './routers';

import 'antd/dist/antd.css';
import './normalize.css';
import './index.css';

const routes = createRouters();
const Root = () => (
  <HashRouter>
    <Switch>
      {routes.map(route => <Route key={route.path || 'notmatch'} {...route} />)}
    </Switch>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
