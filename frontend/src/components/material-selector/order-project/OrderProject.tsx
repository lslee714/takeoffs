import React, { Dispatch, useState } from 'react';
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
  const [purchaseClicked, setPurchaseClicked] = useState(false);
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
    <Container className="order-project text-center">
      <Col sm={9}>
        <Row>
          <Col className="total" sm={9}>
            <Badge className="item-count" pill variant="secondary">
              {itemsInCart} item(s)
            </Badge>
            <strong>Project Total: </strong> $ {projectTotal}
            {purchaseClicked ? (
              <div className="coming-soon">Not Implemented (yet!)</div>
            ) : isComplete ? (
              <FaCheck className="save-complete"></FaCheck>
            ) : (
              ''
            )}
          </Col>
          <Col className="actions">
            <Button
              variant="primary"
              className="save"
              disabled={!itemsInCart}
              onClick={() => {
                if (project.links?.saveCart) {
                  setPurchaseClicked(false);
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
            <Button
              variant="success"
              disabled={!itemsInCart}
              onClick={() => setPurchaseClicked(true)}
            >
              Purchase Division
            </Button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default OrderProject;
