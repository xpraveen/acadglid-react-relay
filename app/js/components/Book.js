import React from "react";

export default class Book extends React.Component {

    render() {
        const {id, title} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
            </tr>
        );
    }
}
