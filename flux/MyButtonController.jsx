import React, { Component } from 'react';

import MyButton from './MyButton.jsx';
import buttonActions from './actions/buttonActions.js';
import ListStore from './store/ListStore.js';

class MyButtonController extends Component{
  constructor(props){
    super(props)
    this.state = {
      val: "",
      items: ListStore.banner.items
    }
  }
  
  createNewItem () {
//  console.log("222")
    buttonActions.addNewItem(this.state.val)
  }
  
  deleteItem(index){
    console.log("删除"+index)
    buttonActions.deleteNewItem(index)
  }
  getInputVal(event){
    console.log(event.target.value)
    this.setState({
      val: event.target.value
    })
  }
  render(){
    
    return (
      <MyButton 
        items = { this.state.items } 
        onClick = { this.createNewItem.bind(this) }
        delClick = { this.deleteItem.bind(this) }
        onChange = { this.getInputVal.bind(this)  }
        />
    )
  }
  componentDidMount(){
    ListStore.addChangeListener(() => {
      this.setState({
        items: ListStore.banner.getAll()
      })
    })
  }
}

export default MyButtonController;
