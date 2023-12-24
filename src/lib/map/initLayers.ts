import palette from '$map/colours';

export const initLayers = (map: mapboxgl.Map) => {
	map.addLayer({
		id: 'boundaries-fill',
		type: 'fill',
		source: 'boundaries',
		layout: {},
		paint: {
			'fill-color': palette[2],
			'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.5]
		}
	});

	map.addLayer({
		id: 'boundaries-line',
		type: 'line',
		source: 'boundaries',
		layout: {},
		paint: {
			'line-color': '#333',
			'line-width': 1
		}
	});
};
