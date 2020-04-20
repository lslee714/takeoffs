import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { IMaterialProduct } from '../../../../models/MaterialSelector';

import './CategoryProducts.scss';

const CategoryProducts = (props: { products: IMaterialProduct[] }) => {
  return (
    <ListGroup className="embedded-list" variant="flush">
      {props.products.map((product: IMaterialProduct) => (
        <ListGroup.Item key={product.id} className="product">
          {product.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoryProducts;
