<script lang="ts">
	import { initMap } from '$src/lib/map/initMap';
	import type { Map } from 'mapbox-gl';

	import { onDestroy, onMount } from 'svelte';

	let map: Map;
	let mapContainer: HTMLDivElement;

	onMount(() => {
		map = initMap(mapContainer);
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<div class="absolute inset-0" bind:this={mapContainer} />
