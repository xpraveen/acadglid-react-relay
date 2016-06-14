import React from "react";

export default class Info extends React.Component {

    render() {
        const {msg} = this.props;
        if(!msg){
            return false;
        }
        return (
            <div className="alert alert-success">
                {msg}
            </div>
        );
    }
}
