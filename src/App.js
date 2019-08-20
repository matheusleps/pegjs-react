import React from 'react';
import {parse, SyntaxError} from './grammar'
import {Input, Div, Form, Output} from './styles'
import { parseExpression } from '@babel/parser';

class App extends React.Component{
  state = {
    input: "",
    output: "",
    error: false
  };
  handleOutput = async e => {
    e.preventDefault();
    try{
      this.setState({output: parse(this.state.input)})
    }
    catch(e){
      this.setState({output: "deu algo errado"})
    }
  };
  render(){
    if(!this.state.error){
     return (
      <Div className="App">
        <Form onSubmit={this.handleInput}>
          <Output>{this.state.output}</Output>
          <Input placeholder="Insira a entrada" onChange={e => this.setState({input: e.target.value, output:parse(e.target.value)})}></Input>   
        </Form>
      </Div>
      );   
    } 
  };
}

export default App;
