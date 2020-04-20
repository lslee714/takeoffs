import React from 'react';
import { IMaterialProduct } from '../../../../models/MaterialSelector';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CategoryProductItem.scss';

const CategoryProductItem = (props: { product: IMaterialProduct }) => {
  const product: IMaterialProduct = props.product;
  return (
    <Row className="product">
      <Col className="product-name" sm={7}>
        {product.name}
      </Col>
      <Col>{product.unit}</Col>
      <Col>
        {product.price} {product.currency}
      </Col>
      <Col>Qty selector</Col>
      <Col>$$$</Col>
    </Row>
  );
};

export default CategoryProductItem;
