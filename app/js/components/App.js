import React from "react";
import Lifecycle from "./Lifecycle";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            hello: "Hi",
            renderLifeCycle: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hello: "Hello", renderLifeCycle: false});
        }, 5000);
    }

    render() {
        const {renderLifeCycle} = this.state;

        return (
            <div className="app container">
                {renderLifeCycle && <Lifecycle hello={this.state.hello}/>}
            </div>
        );
    }
}
