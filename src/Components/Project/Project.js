import React from 'react';

class Projects extends React.Component {

    render() {
        return (<section>
            <h2>General Code Checks</h2>
            <section className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </section>);
    }

}

export default Projects;