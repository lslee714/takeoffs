import React from 'react';
import { IMaterialCategory } from '../../../../models/MaterialSelector';

// Props is actually  { data: IMaterialCategory}
// But passing this as component into SelectorTable
// Doesn't allow passing in props manually
const SelectorTableRow = (props: any) => {
  const materialCategory: IMaterialCategory = props.data;
  return <div>{materialCategory.name}</div>;
};

export default SelectorTableRow;
