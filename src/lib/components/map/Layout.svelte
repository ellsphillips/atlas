<script lang="ts">
	import MapPanel from '$components/map/MapPanel.svelte';
	import Sidebar from '$components/map/Sidebar.svelte';

	let sidebarOpen = true;
</script>

<div class="absolute text-dluhc-black z-50">
	<Sidebar bind:open={sidebarOpen}>
		<slot />
	</Sidebar>
</div>

<div class="inset-0 absolute text-dluhc-black overflow-hidden">
	<MapPanel />
</div>
