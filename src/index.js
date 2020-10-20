import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Example 1:
var DisplayEmpInfo=(employee) =>{
  return <div>

    <h1>Employee Details:</h1>
    <p>
      <label>Employee Id: <b>{employee.EmpId}</b></label>
    </p>
    <p>Employee Name: <b>{employee.EmpName}</b>
    </p>
    
  </div>;
}

//Example 2:
class StateExample extends React.Component{

  state = {counter:0};
  counterIncreament=()=>{
    this.setState({counter:this.state.counter + 1});
  }

  render(){
    return <div>
      <h1>State example...</h1>
      <p>
        <button onClick={this.counterIncreament}>Counter Increament</button>
      </p>
      <p>
        <label>
          Counter increament clicked : <b>{this.state.counter} times</b>
        </label>
      </p>
    </div>;
  }
}

//Example 3:
class CountCharacters extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      message: '', counter: 10
    };
  }

  onMessageChange(text)
  {
    this.setState({
      message: 'message has :' + text.length + ' characters'
    });
  }

  render(){
    return <div>
      <h2>Character count component</h2>
      <label>Enter text:<input type="text" 
                              onChange={e=>this.onMessageChange(e.target.value)}></input> </label>
      <label> {this.state.message}</label>
    </div>
  }
}

//Example 4:
class Employee extends React.Component{
  constructor(props){
    super(props);

    this.state={
      updatedSalary:null
    };
  }

  getUpdatedSalary=(salary)=>
  {
    this.setState({updatedSalary:salary});
  }
  render(){
    return <div>
      <h1>Employee component...</h1>
      <p>
        <label>Id: <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Name: <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Salary: <b>{this.props.Salary}</b></label>
      </p>
      <p>
  <label>Updated Salary: <b>{this.state.updatedSalary}</b></label>
      </p>

      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA}
      Allowance={this.props.Allowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

    </div>
  }
}


class Salary extends React.Component{
  constructor(props){
    super(props);

    this.state={
      basic:this.props.BasicSalary,
      hra:this.props.HRA,
      allowance:this.props.Allowance
    };

  }

updatedSalary=()=>{
  let salary = parseInt(this.refs.basic.value) +
              parseInt(this.refs.hra.value) +
              parseInt(this.refs.allowance.value);

              this.props.onSalaryChanged(salary);
}

  render(){
    return <div>
      <h1>Salary Component...</h1>
      <p>
        <label>Baic Salary: <b>{this.props.BasicSalary}</b></label>
        <input type="text" ref="basic" defaultValue={this.props.basic}></input>
      </p>
      <p>
        <label>HRA: <b>{this.props.HRA}</b></label>
        <input type="text" ref="hra" defaultValue={this.props.hra}></input>
      </p>
      <p>
        <label>Allowance: <b>{this.props.Allowance}</b></label>
        <input type="text" ref="allowance" defaultValue={this.props.allowance}></input>
      </p>
  <button onClick={this.updatedSalary}>Update</button>
    </div>
  }

}


////Example 1:
// const element = <DisplayEmpInfo EmpId="111" EmpName="Deependra"></DisplayEmpInfo>

////Example 2:
//const element = <StateExample></StateExample>

////Example 3:
//const element = <CountCharacters></CountCharacters>

////Example 4:
const element = <Employee Id="101"
                          Name="Deependra"
                          Salary="5000"
                          BasicSalary="3000"
                          HRA="1000"
                          Allowance="1000"></Employee>


 ReactDOM.render(
   element,
   document.getElementById('root')
 );

