export interface BuildingProperty {
  city?: string;
  name?: string;
}

export interface CityProperties {
  building: BuildingProperty[];
  'housing-complex': BuildingProperty[];
}

export interface CitiesGroup {
  city?: string;
  properties: CityProperties;
}

export interface CitiesInterface {
  [key: string]: CitiesGroup;
}
