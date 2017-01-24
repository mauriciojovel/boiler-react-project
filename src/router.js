import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// import { IndexRoute } from 'react-router';

import App from './components/App';

const Hello = () => <div> Hello ! </div>

export default () =>
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/hello" component={Hello}/>
    </Route>
</Router>