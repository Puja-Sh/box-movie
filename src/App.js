import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        hi
      </Route>
    </Switch>
  );
}

export default App;
