<script>
	import MapPanel from '$components/map/MapPanel.svelte';
</script>

<div class="inset-0 absolute lg:flex flex-col text-dluhc-black">
	<div class="flex-1 flex flex-col lg:flex-row overflow-hidden">
		<div
			class="
					flex flex-col shrink-0 w-3xl
					space-y-6
					lg:overflow-y-auto
					lg:mt-0 lg:border-r-black border-r-[2px]
					lg:max-w-[25rem] xl:min-w-[30rem] xl:max-w-[35rem]
				"
		>
			<div class="flex-1 p-6">
				<slot />
			</div>
		</div>

		<MapPanel />
	</div>
</div>
