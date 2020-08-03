import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import MemeItem from './components/MemeItem';
import Mymeme from './components/Mymeme'
import {Form, FormGroup,FormControl,FormLabel} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       memeLimit: 10,
       text0: '',
       text1: ''
    }
  }
  
  render(){
  return (
    <div className="App">
     <h2> <u>Welcome to Meme Generator....</u></h2>
     <Mymeme/>
     <h4><i>Write some Text</i></h4>
     <Form inline>
     <FormGroup>
     <FormLabel>Top</FormLabel>
     { ' '}
     <FormControl onChange={event=>{this.setState({text0: event.target.value})}} type="text"></FormControl>
     </FormGroup>
     { ' '}
     <FormGroup>
     <FormLabel>Bottom</FormLabel>
     {' '}
     <FormControl onChange={event => {this.setState({text1: event.target.value})}} type="text"></FormControl>
     </FormGroup>
     </Form>
      {
        this.props.memes.slice(0,this.state.memeLimit).map((meme,index) =>{
          return (
          <MemeItem 
          key={index} 
          meme={meme}
          text0={this.state.text0}
          text1={this.state.text1}
          />
          )
        })
        
      }
      <div  className="meme-button" onClick={ ()=>{this.setState({memeLimit: this.state.memeLimit+10})}}>Load 10 more memes....</div>
    </div> 
  );
}
}
function mapStateProps(state){
  return state
}

export default connect(mapStateProps,null)(App);
