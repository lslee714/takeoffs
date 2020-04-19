import React, { Dispatch, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';

import DataTableHelper from './DataTableHelper';
import { IMaterialGroup } from '../../../models/MaterialSelector';
import MaterialSelectorActions from '../../../store/actions/material-selector';
import { IRootState } from '../../../store/reducers';

const SelectorTable = () => {
  const [perPage, setPerPage] = useState(10);
  const dispatch: Dispatch<any> = useDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.materialSelector.isLoading
  );
  const totalRows = useSelector(
    (state: IRootState) => state.materialSelector.categories.total
  );

  const columns = DataTableHelper.getColumns();
  const styles = DataTableHelper.getStyles();
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

  return (
    <DataTable
      columns={columns}
      data={existingCategories}
      customStyles={styles}
      progressPending={isLoading}
      pagination
      paginationTotalRows={totalRows}
      paginationServer
      onChangeRowsPerPage={(newPerPage, page) => {
        setPerPage(newPerPage);
        return dispatch(
          MaterialSelectorActions.getCategories({ page, perPage: newPerPage })
        );
      }}
      onChangePage={(page, total) => {
        return dispatch(
          MaterialSelectorActions.getCategories({ page, perPage })
        );
      }}
    />
  );
};

export default SelectorTable;
