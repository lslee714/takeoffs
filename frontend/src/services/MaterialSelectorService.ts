import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { MaterialSelector } from '../models';

export interface IMaterialCategoriesResponse {
  categories: MaterialSelector.IMaterialCategory[];
  total: number;
}

export class MaterialSelectorService {
  // TOdo move this out of app
  apiBaseUrl = `${
    process.env.API_URL || 'https://takeoffs-backend-yww2j5nyqq-uc.a.run.app'
  }/material-selector`;

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

  getProducts(
    category: MaterialSelector.IMaterialCategory
  ): Observable<MaterialSelector.IMaterialProduct[]> {
    const url = `${this.apiBaseUrl}/products?category-name=${category.name}`;
    return ajax.getJSON<MaterialSelector.IMaterialProduct[]>(url);
  }
}

// Create a singleton of the service
export default new MaterialSelectorService();
