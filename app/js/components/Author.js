import React from "react";
import Relay from "react-relay";

export default class Author extends React.Component {

    render() {
        const {author} = this.props;
        const {firstName, lastName} = author;
        return (
            <span>{firstName} {lastName}</span>
        );
    }
}

export default Relay.createContainer(Author, {
    fragments: {
        author: () => Relay.QL `
        fragment on Author {
            firstName,
            lastName
        }
        `
    }
});
