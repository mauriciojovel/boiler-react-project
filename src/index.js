import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

ReactDOM.render(
  <Root {...{store}} />,
  document.getElementById('root')
);


// render(
//   <AppContainer
//     component={Root}
//     props={{ store }}
//   />,
//   document.getElementById('root')
// );

// if (module.hot) {
//   module.hot.accept('./containers/Root', () => {
//     render(
//       <AppContainer
//         component={require('./containers/Root').default}
//         props={{ store }}
//       />,
//       document.getElementById('root')
//     );
//   });
// }
