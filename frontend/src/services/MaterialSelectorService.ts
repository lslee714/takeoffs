import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  IMaterialCategory,
  IMaterialProduct,
} from '../models/MaterialSelector';

export interface IMaterialCategoriesResponse {
  categories: IMaterialCategory[];
  total: number;
}

export class MaterialSelectorService {
  // TOdo move this out of app
  apiBaseUrl = 'http://localhost:8000/material-selector/';

  getCategories(payload?: {
    page: number;
    perPage: number;
  }): Observable<IMaterialCategoriesResponse> {
    let url = `${this.apiBaseUrl}/categories`;
    if (payload) {
      url = `${url}?items-per-page=${payload.perPage}&page=${payload.page}`;
    }
    return ajax.getJSON<IMaterialCategoriesResponse>(url);
  }

  getProducts(category: IMaterialCategory): Observable<IMaterialProduct[]> {
    const url = `${this.apiBaseUrl}/products?category-name=${category.name}`;
    return ajax.getJSON<IMaterialProduct[]>(url);
  }
}

// Create a singleton of the service
export default new MaterialSelectorService();
