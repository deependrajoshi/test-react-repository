import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow";

class Employee extends Component {
  state = {
    data: [
      { id: "1", name: "Test 1", salary: 1000 },
      { id: "2", name: "Test 2", salary: 2000 },
      { id: "3", name: "Test 3", salary: 3000 },
      { id: "4", name: "Test 4", salary: 4000 },
    ],
  };

  handleEmployeeSave = (update) => {
    this.setState(prev => {
        const emp = prev.data.find(d => d.id === update.id)
        emp.salary = update.salary;
        return {
            ...prev
        }
    })
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((d) => (
            <EmployeeRow key={d.id} data={d} onSave={this.handleEmployeeSave}></EmployeeRow>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Employee;
