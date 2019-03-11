import React from 'react';


const UserList = (props) => {
    return <div>
        <h2>User list</h2>
        <p>{props.children}</p>
        <ul>
            {props.employeeObj.map( (emp,index) => {
                return <li key={index}>Name : {emp.name ? emp.name : 'NA'} || Age : {emp.age ? emp.age : 'NA'} || role: {emp.role ? emp.role : 'NA'}</li>
            }  )}
        </ul>
    </div>
}

export default UserList;