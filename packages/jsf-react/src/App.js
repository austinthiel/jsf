import React, { Component } from 'react';
import './css/App.css';
import SiteHeader from './components/organisms/SiteHeader';
import EventBlock from './components/molecules/EventBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />

        <div className="App-body">
          <EventBlock title='Circus Center' cost='Free' time='Every Sunday 5pm-8pm' />
          <EventBlock title='Circus Connections' cost='$5' time='Every Monday 7pm-9pm' />
        </div>
      </div>
    );
  }
}

export default App;
