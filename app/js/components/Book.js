import React from "react";

export default class Book extends React.Component {

    render() {
        const {book} = this.props;
        return (
            <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
            </tr>
        );
    }
}
