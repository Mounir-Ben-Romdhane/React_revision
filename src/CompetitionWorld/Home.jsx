/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: true // Initialisation de l'état pour afficher le message
        };
    }

    componentDidMount() {
        // Définir un timer pour cacher le message après 3 secondes
        setTimeout(() => {
            this.setState({ showMessage: false });
        }, 3000);
    }

    render() {
        return (
            <div>
                
      <NavigationBar />
                <h1>Home</h1>
                {/* Afficher le message seulement si showMessage est vrai */}
                {this.state.showMessage && <p>Welcome to Our Competition World</p>}
            </div>
        );
    }
}

export default Home;
