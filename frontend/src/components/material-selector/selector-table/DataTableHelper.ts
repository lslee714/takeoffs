export class DataTableHelper {
  getColumns() {
    return [
      { name: 'Item', selector: 'name', grow: 8 },
      { name: 'Unit' },
      { name: 'Unit $' },
      { name: 'Items' },
      { name: 'Total' },
    ];
  }

  getStyles() {
    return {
      headCells: {
        style: {
          'font-size': '1.25em',
          'font-weight': 'bold',
        },
      },
    };
  }
}

//Export as singleton
export default new DataTableHelper();
