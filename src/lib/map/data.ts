import type { BoundaryData, GeoType } from '$lib/types';

export const fetchBoundaryData = async (geoType: GeoType): Promise<BoundaryData> => {
	const url = `/public/data/boundaries/${geoType}.geojson`;
	const response = await fetch(url);
	return response.json();
};
