import React from "react";

export default class Message extends React.Component {

    render() {
        let className;
        const {msg, type} = this.props;
        if(!msg){
            return false;
        }

        if(type === "error"){
            className="alert alert-danger";
        }else{
            className="alert alert-success";
        }
        return (
            <div className={className}>
                {msg}
            </div>
        );
    }
}
