import React from "react";

export default class Info extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    componentWillReceiveProps(){
        this.setState({"showAlert": true});

        setTimeout(()=> {
            this.setState({"showAlert": false});
        },3000);
    }
    render() {
        const {book} = this.props;
        const {showAlert} = this.state;
        if(!book){
            return <span></span>;
        }
        return (
            <div className = {showAlert? "alert alert-success": "hide"}>
                {book.title} has been deleted!
            </div>
        );
    }
}
