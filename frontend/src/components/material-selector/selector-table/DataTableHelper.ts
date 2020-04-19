export class DataTableHelper {
  getColumns() {
    return [
      { name: 'Item', selector: 'name', grow: 8 },
      { name: 'QTY' },
      { name: 'Unit' },
      { name: 'Unit $' },
      { name: 'Items' },
      { name: 'Total' },
    ];
  }
}

//Export as singleton
export default new DataTableHelper();
