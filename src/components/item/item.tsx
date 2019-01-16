import * as React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

export default class Item extends React.Component<any, any> {
  public render(){
    return (
      <div className="card card-item" onClick={this.props.click}>
        <a className="item-a">
          <img className="image card-img-top" src={this.props.image}/>
        </a>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/item/${this.props.id}`} className="btn btn-primary">Buy</Link>
        </div>
      </div>
    )
  }
}