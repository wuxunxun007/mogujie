import React, { Component } from 'react';

/*class MyButton extends Component{
 constructor(props){
    super(props)
  }
  
  render(){
    
    return (
      <button onClick = { this.props.onClick } >add Item</button>
    )
  }
}*/
const MyButton = function(props) {
  console.log(props.items)
  return (
    <div>
    <input type= "text"   onChange = { props.onChange.bind(this) } />
    <button onClick = { props.onClick } >add Item</button>
      <ul>
        {
          props.items.map((item, index) => {
            return (
              <li key = { index }>
                { item } --- {index}
                <button onClick = { props.delClick.bind(this, index) }>删除</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default MyButton;
