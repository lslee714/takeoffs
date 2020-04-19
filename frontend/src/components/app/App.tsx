import React, { useEffect, Dispatch } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ConstructionProjects from '../construction-projects/ConstructionProjects';
import ConstructionProjectsActions from '../../store/actions/construction-projects';
import MaterialSelector from '../material-selector/MaterialSelector';

import './App.scss';
import logo from '../../assets/logo.png';

const App: React.FC = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(ConstructionProjectsActions.getProjects());
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Nav className="navbar">
          <Nav.Item>
            <Link className="logo" to="/">
              <img src={logo} alt="Takeoffs" />
            </Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route
            exact
            path={['/', '/projects']}
            component={ConstructionProjects}
          />
          <Route
            exact
            path={'/material-selector/:id'}
            component={MaterialSelector}
            id=":id"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
