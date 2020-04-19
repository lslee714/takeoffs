export interface IConstructionProjectImage {
  name: string;
  link: string;
}

export interface IConstructionProject {
  id: number;
  name: string;
  location: string;
  images?: IConstructionProjectImage[];
  description?: string;
}
