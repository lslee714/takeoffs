import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { IMaterialGroup } from '../models/MaterialSelector';

export interface IMaterialCategoriesResponse {
  categories: IMaterialGroup[];
  total: number;
}

export class MaterialSelectorService {
  // TOdo move this out of app
  apiBaseUrl = 'http://localhost:8000/material-selector/';

  getCategories(payload?: {
    page: number;
    perPage: number;
  }): Observable<IMaterialCategoriesResponse> {
    let url = this.apiBaseUrl;
    if (payload) {
      url = `${url}?items-per-page=${payload.perPage}&page=${payload.page}`;
    }
    return ajax.getJSON<IMaterialCategoriesResponse>(url);
  }
}

// Create a singleton of the service
export default new MaterialSelectorService();
