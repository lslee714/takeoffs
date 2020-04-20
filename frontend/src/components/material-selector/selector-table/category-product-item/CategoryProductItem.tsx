import React, { Dispatch } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';

import { MaterialSelector } from '../../../../models';

import './CategoryProductItem.scss';
import MaterialSelectorActions from '../../../../store/actions/material-selector';

const CategoryProductItem = (props: {
  product: MaterialSelector.IMaterialProduct;
}) => {
  const product: MaterialSelector.IMaterialProduct = props.product;
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <Row
      className="product"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dispatch(MaterialSelectorActions.showInCart(product))
      }
    >
      <Col className="product-name" sm={9}>
        {product.name}
      </Col>
      <Col>{product.unit}</Col>
      <Col>
        {product.price} {product.currency}
      </Col>
    </Row>
  );
};

export default CategoryProductItem;
