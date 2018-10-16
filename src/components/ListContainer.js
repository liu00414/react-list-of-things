import React, { Component } from 'react';
import Item from './Item.js';


class ListContainer extends Component {
    
  render() {
      let dataArray=this.props.data;
      console.log(dataArray);
    return (
      <div>
        <h3>List of Singers</h3>
        <ul>
        {dataArray.map((obj,index)=>(<Item key={obj.id} id={obj.id} obj={obj} nameValue={obj.name} countryValue={obj.country} changeParentState={this.props.changeParentState} />))}
        
        </ul>
        </div>
    );
  }
}

export default ListContainer;
