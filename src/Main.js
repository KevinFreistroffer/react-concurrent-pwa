import React, { Component, Fragment } from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<main>{this.props.children}</main>);
    }
}

export default Main;