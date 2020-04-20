import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

import { IRootState } from '../../../store/reducers';

import './OrderProject.scss';

const OrderProject = () => {
  let itemsInCart = 0;
  const projectTotal = useSelector((state: IRootState) => {
    let total = 0;
    for (const [productId, quantity] of Object.entries(
      state.materialSelector.cart.added
    )) {
      itemsInCart += 1;
      const productTotal =
        state.materialSelector.products.byId[productId].price * quantity;
      total += productTotal;
    }
    return Math.round(total * 100) / 100;
  });

  return (
    <Container className="order-project float-right">
      <Row>
        <Col className="total" sm={6}>
          <strong>Project Total: </strong> $ {projectTotal}
        </Col>
        <Col>
          <Badge className="float-right item-count" pill variant="secondary">
            {itemsInCart} item(s)
          </Badge>
        </Col>
        <Col>
          <Button variant="primary" className="save">
            Save Project
          </Button>
          <Button variant="success" disabled={itemsInCart === 0}>
            Purchase Division
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderProject;
