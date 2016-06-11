import React from "react";
import Author from "./Author";

export default class Book extends React.Component {

    renderNewArrivalLabel(){
        const style={
            "color": "red"
        };
        return (<span style={style}> New Arrival !</span>);
    }
    render() {
        const {book} = this.props;
        const {id, title,isNew, author} = book;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}  {isNew? this.renderNewArrivalLabel():""}</td>
                <td><Author author={author}/></td>
            </tr>
        );
    }
}
