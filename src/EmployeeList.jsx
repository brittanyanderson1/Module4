import React from 'react'
import EmployeeFilter from '/EmployeeFilter.jsx'
import EmployeeAdd from './employeeAdd.jsx'

function EmployeeRow(props) {
    return (
        <tr>
            <td>{props.emplyee.name}</td>
            <td>{props.emplyee.position}</td>
            <td>{props.emplyee.salary}</td>
        </tr>
    )
}

function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee => 
        <EmployeeRow key={employee.id} employee={employee}/>
    )
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeAdd/>
                <EmployeeTable employees={this.props.employees}/>
            </div>
        )
    }
}