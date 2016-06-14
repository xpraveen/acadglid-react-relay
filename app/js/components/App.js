import React from "react";
import Relay from "react-relay";
import Header from "./Header";
import Home from "./Home";
import BookDrawer from "./BookDrawer";
import Info from "./Info";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "HOME"
        };
    }

    closeBookDrawer = () => {
        this.setState({view: "HOME"});
    }

    openBookDrawer = () => {
        this.setState({view: "ADD_BOOK"});
    }

    handleSuccess = ({msg}) =>{
        this.setState({msg});
    }

    renderDrawer() {
        const {view} = this.state;
        const {bookStore} = this.props;

        if (view === "ADD_BOOK") {
            return <BookDrawer bookStore={bookStore} closeBookDrawer={this.closeBookDrawer}/>;
        }
    }

    render() {
        const {bookStore} = this.props;
        const {msg} =  this.state;
        return (
            <div className="book-store">
                <Header openBookDrawer={this.openBookDrawer}/>
                <Info msg={msg}/>
                <Home bookStore={bookStore} showSuccess={this.handleSuccess}/>
                <div>
                    {this.renderDrawer()}
                </div>
            </div>
        );
    }
}

export default Relay.createContainer(App, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            ${Home.getFragment("bookStore")}
            ${BookDrawer.getFragment("bookStore")}
        }
        `
    }
});
