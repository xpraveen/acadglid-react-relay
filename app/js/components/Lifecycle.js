import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: prevProps: ", this.props);
        console.log("componentWillReceiveProps: nextProps: ", nextProps);
        console.log(`Moving from ${this.props.hello} to ${nextProps.hello}`);
    }

    render() {
        console.log("render");
        return (
            <div className="app container">
                <h1>LifeCycle</h1>
            </div>
        );
    }
}
