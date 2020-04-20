import { IMaterialProduct } from './MaterialSelector';

export interface IConstructionProjectImage {
  name: string;
  link: string;
}

// TODO separate out required into a details interface, update UI to use that
export interface IConstructionProject {
  id: number;
  name: string;
  location: string;
  images?: IConstructionProjectImage[];
  description?: string;
  links?: {
    [name: string]: string;
  };
  cart?: IMaterialProduct[];
}
