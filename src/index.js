import React from 'react'
import ReactDOM from 'react-dom'

class Greet extends React.Component{
  render(){
    return (
      <h1>hello! kiniro-mozaiku</h1>
    )
  }
}

window.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render (<Greet />,document.querySelector('main'))
})