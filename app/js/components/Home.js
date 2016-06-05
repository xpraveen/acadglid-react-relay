import React from "react";
import Books from "./Books";
import Banner from "./Banner";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <Books/>
            </div>
        );
    }
}
