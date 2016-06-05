import React from "react";
import Book from "./Book";

export default class Books extends React.Component {

    render() {
        const counts = [1, 2, 3, 4, 5];

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
                        {
                            counts.map((count) => {
                                return (<Book key={count} />);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
