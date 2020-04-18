import React, { useEffect, Dispatch } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';

import ConstructionProjects from './components/construction-projects/ConstructionProjects';
import AppActions from './store/actions/app';

import './App.css';

const App: React.FC = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(AppActions.appInit());
  });

  return (
    <div>
      <Nav className="navbar">
        <Nav.Item>
          <Nav.Link className="logo" href="/">
            Takeoffs
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container>
        <Row>
          <Col>
            <ConstructionProjects />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
