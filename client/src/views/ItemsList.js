import React from 'react';
import ItemsListEntry from './ItemsListEntry';

const ItemsList = ({itemsList}) => (
  <div>
  {itemsList.map((item, index) => <ItemsListEntry item={item} key={index} num={index}/>)}
  </div>
);


export default ItemsList
