import type { BoundaryData } from '$lib/types';

import type mapboxgl from 'mapbox-gl';
import proj4 from 'proj4';

export const removeLabels = (map: mapboxgl.Map) => {
	map.getStyle().layers.forEach((l) => {
		if (l.type === 'symbol') {
			map.setLayoutProperty(l.id, 'visibility', 'none');
		}
	});
};

export const addHoverListeners = (map: mapboxgl.Map) => {
	let hoveredFeatureId: string | number | undefined;

	map.on('mousemove', 'boundaries-fill', (ev) => {
		if (hoveredFeatureId !== undefined) {
			map.setFeatureState({ source: 'boundaries', id: hoveredFeatureId }, { hover: false });
		}

		if (!ev.features || ev.features.length === 0) {
			return;
		}

		const feature = ev.features[0];

		hoveredFeatureId = feature.id;
		map.setFeatureState({ source: 'boundaries', id: hoveredFeatureId }, { hover: true });
	});

	map.on('mouseleave', 'boundaries-fill', () => {
		if (hoveredFeatureId !== undefined) {
			map.setFeatureState({ source: 'boundaries', id: hoveredFeatureId }, { hover: false });
		}
		hoveredFeatureId = undefined;
	});

	return map;
};

export const normalizeData = (data: BoundaryData) => {
	proj4.defs(
		'EPSG:27700',
		'+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs'
	);

	delete (data as any).crs;

	data.features.forEach((feature, i) => {
		feature.geometry.coordinates.forEach((coord, j) => {
			coord.forEach((pos, k) => {
				if (pos.length === 0) {
					return;
				}

				const isLegacyGeoJson = Array.isArray(pos[0]);
				if (isLegacyGeoJson) {
					pos.forEach((innerPos, l) => {
						const newVal = proj4('EPSG:27700', 'EPSG:4326', innerPos as never as number[]);

						(data.features[i].geometry.coordinates[j][k][l] as never as number[]) = newVal;
					});
					return;
				}
				const newVal = proj4('EPSG:27700', 'EPSG:4326', pos);

				data.features[i].geometry.coordinates[j][k] = newVal;
			});
		});
	});
};
