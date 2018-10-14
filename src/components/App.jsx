import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WizardForm from './WizardForm'
import showResults from "./showResults";
import store from "../store";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Provider store={store}>
          <div className="row">
            <WizardForm onSubmit={showResults} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
