import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends Component {
    state = {
        edit: false,
        salary: null
    }

    componentDidMount() {
        this.setState({ salary: this.props.data.salary})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.data.salary !== prevProps.data.salary) {
            this.setState({ salary: this.props.data.salary})
        }   
    }

    handleSaveClick = () => { 
        const { onSave, data } = this.props;
        const { salary } = this.state;
        onSave({ ...data, salary: salary }); 
        this.setState({ edit: false }); 
    }

    handleSalaryChange = e => {
        this.setState({ salary: e.target.value }); 
    }

    render() {
        const { data } = this.props;
        const { edit, salary } = this.state;
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>
                    {edit? (
                        <input type="text" value={salary} onChange={this.handleSalaryChange}/>
                    ): data.salary}
                </td>
                <td>
                    {edit? (
                        <>
                            <button onClick={this.handleSaveClick}>Save</button>
                            <button onClick={() => { this.setState({ edit: false }); }}>Cancel</button>
                        </>
                    ) : (
                        <button onClick={() => { this.setState({ edit: true }) }}>Edit</button>
                    )}
                    
                </td>
            </tr>
        )
    }
}

EmployeeRow.propTypes = {
    data: PropTypes.object,
    onSave: PropTypes.func
}

export default EmployeeRow;