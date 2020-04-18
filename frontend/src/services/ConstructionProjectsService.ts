import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { IConstructionProject } from '../models/ConstructionProject';

export class ConstructionProjectsService {
  getProjects(): Observable<IConstructionProject[]> {
    return ajax.getJSON<IConstructionProject[]>('http://localhost:8000');
  }
}

// Create a singleton of the service
export default new ConstructionProjectsService();
