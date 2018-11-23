import React, { Component } from 'react';
import '../../css/SiteHeader.css';
import Link from '../atoms/Link';

export default class SiteHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-header-wrapper">
            <div className="App-header-title">
              JuggleSF
            </div>
            <nav className="App-header-nav">
              <Link onClick={() => console.log('ayy link click')} className='App-header-nav-link' label='About' />
              <Link onClick={() => console.log('ayy link click')} className='App-header-nav-link' label='Events' />
              <Link onClick={() => console.log('ayy link click')} className='App-header-nav-link' label='Patterns' />
              <Link onClick={() => console.log('ayy link click')} className='App-header-nav-link' label='Contact' />
            </nav>
          </div>
        </div>
      </header> 
    );
  }
}