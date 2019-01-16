import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

const clickHandler = () => {
  return store.dispatch({type: 'INCREMENT'}) }
const render = () => {
  ReactDOM.render(
    <Router>
    <App
      value={store.getState()}
      handleClick = {clickHandler}/>
    </Router>,
    document.getElementById('root') as HTMLElement
  );
}
render();
store.subscribe(render);
registerServiceWorker();
