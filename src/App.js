import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <p>Aid-to-Venezuela</p>
        </header>
        <Button  variant="contained" color="primary"> Make a Donation </Button>
        <Card> Card</Card>
      </React.Fragment>
    );
  }
}

export default App;
