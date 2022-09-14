import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Workout Log</h1>
            <div style={styles.container}>
                <h2>New Workout:</h2>
            </div>
            <div>
            <h4>Date:</h4>
            </div>
            </div>
        )
    }
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      margin: 0,
    },
  };

export default App;