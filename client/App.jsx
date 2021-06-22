import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from './containers/MainContainer';

const App = props => {
  return (<div>
    <Router>
      <MainContainer />
    </Router>
  </div>)
}

export default App;
