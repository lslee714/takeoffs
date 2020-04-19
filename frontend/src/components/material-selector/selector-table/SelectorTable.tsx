import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

import DataTableHelper from './DataTableHelper';
import { IMaterialGroup } from '../../../models/MaterialSelector';
import { IRootState } from '../../../store/reducers';

const SelectorTable = () => {
  const columns = DataTableHelper.getColumns();
  const existingCategories: IMaterialGroup[] = useSelector(
    (state: IRootState) => {
      const materialData = state.materialSelector;
      const categories: IMaterialGroup[] = [];
      materialData.categories.sorted.forEach((id: number) =>
        categories.push(materialData.categories.byId[id])
      );
      return categories;
    }
  );

  return <DataTable columns={columns} data={existingCategories} />;
};

export default SelectorTable;
