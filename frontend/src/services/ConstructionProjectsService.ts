import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { IConstructionProject } from '../models/ConstructionProject';

export class ConstructionProjectsService {
  // TOdo move this out of app
  apiBaseUrl = `${process.env.API_URL}/construction-projects`;

  getProjects(): Observable<IConstructionProject[]> {
    return ajax.getJSON<IConstructionProject[]>(this.apiBaseUrl);
  }

  postProject(project: IConstructionProject): Observable<AjaxResponse> {
    return ajax({
      url: this.apiBaseUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: project,
    });
  }

  deleteProject(projectDeleteLink: string): Observable<AjaxResponse> {
    return ajax({
      url: projectDeleteLink,
      method: 'DELETE',
    });
  }

  saveProjectCart(
    link: string,
    cart: { [productId: string]: number }
  ): Observable<AjaxResponse> {
    return ajax({
      url: link,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: cart,
    });
  }
}

// Create a singleton of the service
export default new ConstructionProjectsService();
