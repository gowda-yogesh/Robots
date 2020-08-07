import { React, Component } from "react";

class ErrorBoundry extends Component {

    constructor() {

        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError === true) {
            return <h1> Sorry due to Some Error unable to Load the page </h1>
        }
        return (this.props.children)
    }
}

export default ErrorBoundry;