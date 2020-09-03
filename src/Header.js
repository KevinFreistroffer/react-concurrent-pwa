import React, { Component, Fragment } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<header>
            <h1>Concurrent Mode</h1>
            <h2>Progressive Web App</h2>
        </header>);
    }
}

export default Header;