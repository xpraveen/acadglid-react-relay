import React from "react";
import Relay from "react-relay";

class Hello extends React.Component {
    render() {
        const {hello} = this.props.bookStore;
        return (
            <div>
                {hello}
            </div>
        );
    }
}


export default Relay.createContainer(Hello, {
    fragments: {
        bookStore: () => Relay.QL `
            fragment on BookStore{
                hello
            }
        `
    }
});
