import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FrontPage from './components/FrontPage/FrontPage';
import PostsDetails from './components/PostsDetails/PostsDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/FrontPage"> <FrontPage></FrontPage> </Route>
          <Route path="/Post/:PostId"> <PostsDetails></PostsDetails> </Route>
          <Route exact path="/"> <FrontPage></FrontPage> </Route>
          <Route path="*"> <NotFound></NotFound> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
