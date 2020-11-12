import React from 'react';


const Table = (props) => {
    const {projects} = props;
    return (
    <table className="table">
        <thead>
            <tr>
                <th >UserID</th>
                <th>Name</th>
                <th >Project</th>
                <th >Category ID</th>
                <th >Category</th>
                <th /> 
            </tr>
        </thead>
        <tbody>
            {projects.map(project => (
                <tr key={project.UserID}>
                    <td>{project.UserID}</td>
                    <td>{project.UserName}</td>
                    <td>{project.ProjectName}</td>
                    <td>{project.CategoryID}</td>
                    <td>{project.CategoryName}</td>
                </tr>
            ))}
        </tbody>
    </table>
     );
}

export default Table;