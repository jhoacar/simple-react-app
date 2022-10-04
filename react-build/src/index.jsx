import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header';
import { Body } from './body';

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));