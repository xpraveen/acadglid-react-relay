import React from "react";
import Relay from "react-relay";

class Hello extends React.Component {
    render() {
        const {firstName, lastLoginTimeStamp} = this.props.user;
        const msg = (lastLoginTimeStamp ? `Yours  last login time ${lastLoginTimeStamp}` : "Congratulation on your first login");
        return (
            <div className="container">
                <b>Welcome {firstName} </b>
                {msg}
            </div>
        );
    }
}


export default Relay.createContainer(Hello, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            hello
        }
        `,
        user: () => Relay.QL `
        fragment on User {
            firstName,
            lastLoginTimeStamp
        }
        `
    }
});
