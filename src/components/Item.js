import React, { Component } from 'react';


class Item extends Component {
constructor(){
        super();
        this.nameInput=React.createRef();
        this.countryInput=React.createRef();
        this.state={};
    }
componentDidMount(){
        this.setState({
            editing:false, 
            id:this.props.id,
            name:this.props.nameValue,
            country:this.props.countryValue
        })
    }
    
edit=(ev)=>{
    this.setState({editing:!this.state.editing})
    console.log(this.props.nameValue);
}
save=(ev)=>{  
    this.setState({
        editing:false,
        id:this.props.id,
        name:this.nameInput.current.value,
        country:this.countryInput.current.value
    },()=>this.props.changeParentState(this.state));  
}
delete=(ev)=>{  
    console.log("de");
    this.setState({
        delete:true,
        id:this.props.id
    },()=>this.props.changeParentState(this.state));  
}
renderEditingMode=()=>{
   return <React.Fragment>  
        <li>
        
            <p><input type="text" defaultValue={this.state.name} ref={this.nameInput}/></p>
            <p><input type="text" defaultValue={this.state.country} ref={this.countryInput}/></p>           
            <button onClick={this.save} className="save">Save</button>
           
        </li>
        </React.Fragment>
}
renderDefault=()=>{
    return <React.Fragment>  
        <li>
            <p className="name">{this.state.name}</p>
            <p className="country">{this.state.country}</p>
            <button onClick={this.edit} className="edit">Edit</button>
            <button onClick={this.delete} className="delete">Delete</button>
            
        </li>
        </React.Fragment>
}
  render() {
    return (
    this.state.editing?this.renderEditingMode():this.renderDefault()            
    );
  }
}

export default Item;
