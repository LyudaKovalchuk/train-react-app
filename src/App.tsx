import * as React from 'react';
import './App.css';
import Form from "./components/form/form"
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import {Route} from "react-router";
import store from './store/store';


class App extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=20')
      .then(res => res.json())
      .then(res => {
        store.dispatch({type: 'ADD_ITEMS', payload: res})
      })
  }

  public render() {
    const { handleClick } = this.props;
    return (
      <div>
        <Navbar/>
        <div>{this.props.value.initialReducer.counter}</div>
        <Main
          handleClick={handleClick}/>
        <Route path="/item/:id" component={Form}/>
      </div>
    );
  }
}

export default App;
