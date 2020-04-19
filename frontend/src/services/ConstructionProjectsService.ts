import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { IConstructionProject } from '../models/ConstructionProject';

export class ConstructionProjectsService {
  // TOdo move this out of app
  apiBaseUrl = 'http://localhost:8000/construction-projects/';

  getProjects(): Observable<IConstructionProject[]> {
    return ajax.getJSON<IConstructionProject[]>(this.apiBaseUrl);
  }

  postProject(project: IConstructionProject): Observable<any> {
    return ajax({
      url: this.apiBaseUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: project,
    });
  }
}

// Create a singleton of the service
export default new ConstructionProjectsService();
