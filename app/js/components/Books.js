import React from "react";
import Book from "./Book";

export default class Books extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Book/>
                        <Book/>
                        <Book/>
                    </tbody>
                </table>
            </div>
        );
    }
}
