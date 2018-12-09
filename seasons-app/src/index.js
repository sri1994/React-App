import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season';
import Spinner from './spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };
 
   componentDidMount() {
     console.log('My component was rendered to screen');
     window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
            this.setState({ lat: position.coords.latitude })    
        },
        (err) => {
          this.setState({ errorMessage: err.message });
        }
    );
    }

   componentDidUpdate() {
     console.log('My component was re-rendered to screen');
   }

   componentWillUnmount() {
    console.log('My component was unmounted from screen');
   }

    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <Season lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request" />
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);