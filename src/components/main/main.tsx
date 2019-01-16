import * as React from 'react';
import ItemList from '../item-list/itemList';
import Form from '../form/form';
import { Switch, Route } from 'react-router-dom';

export default class Main extends React.Component<any, any>{
  constructor(props:any){
    super(props);
    this.renderItemList = this.renderItemList.bind(this);
  }

    public renderItemList() {
      return (
        <ItemList
          handleClick={this.props.handleClick}/>
      )
    }

  public render(){
    return(
      <Switch>
        <Route exact path="/" render={this.renderItemList}/>
        <Route path="/user/:id" component={Form}/>
      </Switch>
    )

  }

}
