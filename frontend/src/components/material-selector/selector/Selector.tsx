import React, { useEffect, Dispatch } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';

import Cart from '../cart/Cart';
import SelectorTable from '../selector-table/SelectorTable';
import MaterialSelectorActions from '../../../store/actions/material-selector';

import './Selector.scss';

const Selector = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(MaterialSelectorActions.getCategories());
  });

  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col sm={8}>
            <SelectorTable />
          </Col>
          <Col sm={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Selector;
