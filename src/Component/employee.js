import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import App from '../App';

class Employee extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            data:
            [
                { Id:'1', EmployeeName:'Test 1', Salary:1000 },
                { Id:'2', EmployeeName:'Test 2', Salary:2000 },
                { Id:'3', EmployeeName:'Test 3', Salary:3000 },
                { Id:'4', EmployeeName:'Test 4', Salary:4000 }
            ]
        };
        
    }

editEmp=(id)=>{
        alert('edit employee');
    }

      renderEmployee =()=>{
          const data = this.state.data;
          const mapRows = data.map((item, index) =>(
              <Fragment key={item.Id}>
                  <li>
                        <span>Employee Id : {item.Id}</span>
                        <span>Employee Name : {item.EmployeeName}</span>
                        <span>Salary: {item.Salary}</span>
                        <button onClick={()=> this.editEmp(item.Id)}>Edit</button>
                  </li>
              </Fragment>
              ));
          return mapRows;
      };

    render(){
        
        return (
                <ul>
                    {this.renderEmployee()}
                </ul>
        );
    }
}


const element = <Employee></Employee>

  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  