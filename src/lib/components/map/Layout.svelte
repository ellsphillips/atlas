<script>
	import MapPanel from '$components/map/MapPanel.svelte';
	import Sidebar from '$components/map/Sidebar.svelte';
	import Hamburger from '../Hamburger.svelte';

	let sidebarOpen = false;
</script>

<div class="absolute text-dluhc-black z-50">
	<Sidebar bind:open={sidebarOpen}>
		<button
			on:click={() => (sidebarOpen = !sidebarOpen)}
			class="mb-8 rotate-90 transition-transform"
			class:rotate-0={sidebarOpen}
		>
			<Hamburger />
		</button>

		<slot />
	</Sidebar>
</div>

<div class="inset-0 absolute text-dluhc-black overflow-hidden">
	<MapPanel />
</div>
