import React from "react";

export default class Author extends React.Component {

    render() {
        const {author} = this.props;
        const {firstName, lastName} = author;
        return (
            <span className="author"><span className="first-name">{firstName}</span> <span className="last-name">{lastName}</span></span>
        );
    }
}
