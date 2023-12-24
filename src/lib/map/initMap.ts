import env from '$env';
import { Map } from 'mapbox-gl';

import { addHoverListeners, normalizeData, removeLabels } from '$helpers/map';
import { fetchBoundaryData } from '$lib/map/data';
import { initLayers } from '$lib/map/initLayers';

export const initMap = (container: HTMLElement): Map => {
	const map = new Map({
		container,
		accessToken: env.MAPBOX_API_TOKEN,
		style: `mapbox://styles/mapbox/dark-v11`,
		maxBounds: [
			[-10.76418, 50.528423],
			[1.9134116, 60.331151]
		],
		center: [-3.10376, 51.52478],
		zoom: 5
	});

	map.on('load', () => {
		removeLabels(map);

		(async () => {
			const data = await fetchBoundaryData('country');

			normalizeData(data);

			map.addSource('boundaries', {
				type: 'geojson',
				data: data
			});

			initLayers(map);
			addHoverListeners(map);
		})();
	});

	return map;
};
