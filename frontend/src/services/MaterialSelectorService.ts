import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { IMaterialGroup } from '../models/MaterialSelector';

export class MaterialSelectorService {
  // TOdo move this out of app
  apiBaseUrl = 'http://localhost:8000/material-selector/';

  getCategories(): Observable<IMaterialGroup[]> {
    return ajax.getJSON<IMaterialGroup[]>(this.apiBaseUrl);
  }
}

// Create a singleton of the service
export default new MaterialSelectorService();
