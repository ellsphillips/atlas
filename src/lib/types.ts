import type { FeatureCollection, Polygon } from 'geojson';
import type { GEOTYPES } from './constants';

export interface GeoJSONProperties<T> {
	GlobalID: string;
	ObjectID: number;
	bng_e: number;
	bng_n: number;
	code: T extends `${string}cd` ? string : never;
	name: T extends `${string}nm` ? string : never;
	welsh_name: T extends `${string}nmw` ? string : never;
	lat: number;
	long: number;
}

export type BoundaryData = FeatureCollection<Polygon, GeoJSONProperties<GeoType>>;

export type GeoType = keyof typeof GEOTYPES;
