import logo, {  } from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.clickTabNumber = this.clickTabNumber.bind(this)
    this.state = {
      selectedTabNumber: 0
    }
  }

  clickTabNumber(num) {
    this.setState(
      { selectedTabNumber: num }
    )
  }

  render() {
    return (
      <header className='App-header'>
        <h1>
          <ul>
            <li>
              <button onClick={() => this.clickTabNumber(1)} className={`${this.state.selectedTabNumber === 1 ? 'selected' : ''}`}>
                <img src={logo} className={`App-logo`} alt='logo'/>
                All
              </button>
            </li>
            <li>
              <button onClick={() => this.clickTabNumber(2)} className={`${this.state.selectedTabNumber === 2 ? 'selected' : ''}`}>
                <img src={logo} className={`App-logo`} alt='logo'/>
                IMG
              </button>
            </li>
            <li>
              <button onClick={() => this.clickTabNumber(3)} className={`${this.state.selectedTabNumber === 3 ? 'selected' : ''}`}>
                <img src={logo} className={`App-logo`} alt='logo'/>
                VIDEO
              </button>
            </li>
          </ul>
        </h1>
      </header>
    )
  }
}

export default App;
