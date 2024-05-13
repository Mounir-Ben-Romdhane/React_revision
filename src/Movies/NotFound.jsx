import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
            showMessage: true,
            seconds: 3  // Set the initial countdown time in seconds.
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { seconds } = this.state;
            if (seconds > 0) {
                this.setState(prevState => ({ seconds: prevState.seconds - 1 }));
            } else {
                this.setState({ navigate: true, showMessage: false });
                clearInterval(this.interval);  // Clear interval once the countdown finishes.
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);  // Make sure to clear the interval when the component unmounts.
    }

    render() {
        const { navigate, showMessage, seconds } = this.state;

        if (navigate) {
            return <Navigate to="/movies" replace={true} />;
        }

        return (
            <div>
                <h1>404 - Page Not Found</h1>
                {showMessage && (
                    <p>Redirect to Movies page in {seconds} seconds</p>  // Display the countdown.
                )}
            </div>
        );
    }
}

export default NotFound;
