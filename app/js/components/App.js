import React from "react";

export default class App extends React.Component {

    render() {
        return (
            <div className="app container">
                <br/>
                <div className="alert alert-success" role="alert">A sample success message</div>
                <br/>
                <div className="alert alert-info" role="alert">A sample Alert message</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John</td>
                            <td>Dae</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Doe</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
