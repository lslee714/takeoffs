import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { IMaterialProduct } from '../../../../models/MaterialSelector';

const CategoryProducts = (props: { products: IMaterialProduct[] }) => {
  return (
    <ListGroup variant="flush">
      {props.products.map((product: IMaterialProduct) => (
        <ListGroup.Item key={product.id}>{product.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoryProducts;
