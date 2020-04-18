import React, { useEffect, Dispatch } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ConstructionProjects from './components/construction-projects/ConstructionProjects';
import ConstructionProjectsActions from './store/actions/construction-projects';

import './App.css';

const App: React.FC = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(ConstructionProjectsActions.getProjects());
  });

  return (
    <BrowserRouter>
      <Nav className="navbar">
        <Nav.Item>
          <Link className="logo" to="/">
            Takeoffs
          </Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route exact path="/" component={ConstructionProjects} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
