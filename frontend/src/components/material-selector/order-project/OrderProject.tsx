import React, { Dispatch } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { ConstructionProject } from '../../../models';
import { IRootState } from '../../../store/reducers';
import ConstructionProjectActions from '../../../store/actions/construction-projects';

import './OrderProject.scss';

const OrderProject = (props: {
  project: ConstructionProject.IConstructionProject;
}) => {
  const project = props.project;
  const dispatch: Dispatch<any> = useDispatch();
  let cart: {
    [productId: string]: number;
  };
  let itemsInCart = 0;

  const projectTotal = useSelector((state: IRootState) => {
    let total = 0;
    cart = state.materialSelector.cart.added;
    for (const [productId, quantity] of Object.entries(cart)) {
      itemsInCart += 1;
      const productTotal =
        state.materialSelector.products.byId[productId].price * quantity;
      total += productTotal;
    }
    return Math.round(total * 100) / 100;
  });

  const isComplete = useSelector((state: IRootState) => {
    return state.projects.saveIsComplete;
  });

  return (
    <Container className="order-project float-right">
      <Row>
        <Col className="total" sm={6}>
          <strong>Project Total: </strong> $ {projectTotal}
          {isComplete ? <FaCheck className="save-complete"></FaCheck> : ''}
        </Col>
        <Col>
          <Badge className="float-right item-count" pill variant="secondary">
            {itemsInCart} item(s)
          </Badge>
        </Col>
        <Col>
          <Button
            variant="primary"
            className="save"
            onClick={() => {
              if (project.links?.saveCart) {
                dispatch(
                  ConstructionProjectActions.saveProjectCart({
                    saveCartLink: project.links.saveCart,
                    cart,
                  })
                );
              }
            }}
          >
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
