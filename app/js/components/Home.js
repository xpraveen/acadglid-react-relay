import React from "react";
import Books from "./Books";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Books/>
            </div>
        );
    }
}
