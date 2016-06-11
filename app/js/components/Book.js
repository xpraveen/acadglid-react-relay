import React from "react";

export default class Book extends React.Component {

    renderNewArrivalLabel(){
        const style={
            "color": "red"
        };
        return (<span style={style}> New Arrival !</span>);
    }
    render() {
        const {book} = this.props;
        const {id, title,isNew} = book;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}  {isNew? this.renderNewArrivalLabel():""}</td>
            </tr>
        );
    }
}
