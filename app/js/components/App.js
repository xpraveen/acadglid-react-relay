import React from "react";
import Relay from "react-relay";
import Header from "./Header";
import Home from "./Home";
import BookDrawer from "./BookDrawer";
import Message from "./Message";

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

    handleShowMessage = ({msg, type}) =>{
        this.setState({msg, type});
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
        const {msg, type} =  this.state;
        return (
            <div className="book-store">
                <Header openBookDrawer={this.openBookDrawer}/>
                <Message msg={msg} type= {type}/>
                <Home bookStore={bookStore} showMessage={this.handleShowMessage}/>
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
