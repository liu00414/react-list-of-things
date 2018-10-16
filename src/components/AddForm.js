import React, { Component } from 'react';


class AddForm extends Component {
    
    constructor(){
        super();
        this.nameRef=React.createRef();
        this.countryRef=React.createRef();
    }
    componentDidMount(){
        this.setState({
            data:this.props.data,
        })
    }
    saveItem=(ev)=>{
        ev.preventDefault();
        console.log("Save!");
        console.log(this.nameRef.current.value);
        console.log(this.countryRef.current.value);
        let name=this.nameRef.current.value;
        let country=this.countryRef.current.value;
        let id=Date.now();
        let dataArray=this.state.data;
        let obj={id,name,country};
        dataArray.push(obj);
        this.setState({data:dataArray});
        this.props.changeParentState(this.state);
        console.log(dataArray);
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.saveItem}>
            <h3>Add New Singer</h3>
            <input type="text" ref={this.nameRef} placeholder="Name"/>
            <input type="text" ref={this.countryRef} placeholder="Country"/>
            <button className="save">Save</button>
        </form>
        </div>
    );
  }
}

export default AddForm;
