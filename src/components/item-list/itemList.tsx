import * as React from 'react';
import Item from "../item/item";
import store from '../../store/store'


const ItemList = (props)=> {
  return (
    <div className="item-list">
      {store.getState().itemReducer.items.map( (item:any) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            image={item.url} click={props.handleClick}/>
        )
      })
      }
    </div>
  )
}

export default ItemList;