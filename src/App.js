import React, { Component } from 'react';
import AddForm from './components/AddForm.js';
import ListContainer from './components/ListContainer.js';
import logo from './logo.svg';
import './App.css';

function Header(props){
    return(
        <h1>
            Singers Around The World
        </h1>    
    )
}
class App extends Component {
    constructor(){
        super();
        this.nameRef=React.createRef();
        this.countryRef=React.createRef();
        this.state={
            data:[
                {id:1,name:"Shawn Mendes",country:"Canada"}
            ]
        }
    }
    handler=(obj)=>{
        console.log("Parent!");
        this.setState(obj);
        console.log(this.state);
    }
    updateData=(obj)=>{
        let data=this.state.data;
        let index=data.findIndex(item=>item.id==obj.id);
        if(!obj.delete){
        let changes={
            id:obj.id,
            name:obj.name,
            country:obj.country
        }
        data[index]=changes;
        }else{
            data.splice(index,1);
//            console.log(data);
//            console.log(obj.id);
//            console.log(index);       
        }
        this.setState({data});
        console.log("Updated");  
    }
    
  render() {
    
    return (
      <div className="App">
       <Header />
        <AddForm changeParentState={this.handler} data={this.state.data}/>
        <ListContainer changeParentState={this.updateData} data={this.state.data}/>
        
        
        
      </div>
    );
  }
}

export default App;
