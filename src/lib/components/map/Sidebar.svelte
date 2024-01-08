<script lang="ts">
	import { fade } from 'svelte/transition';

	export let open = true;
	let hovered = false;
</script>

<!-- class:xl:max-w-3xs={!open} -->

<div class="max-w-3xs">
	<div
		class={`
            bg-gray-900 h-screen
            flex flex-col shrink-0 space-y-6
            overflow-hidden xl:overflow-y-auto
            xl:mt-0 xl:border-r-black xl:border-r-[2px]
            transition-[width] duration-200 delay-50 ease-[cubic-bezier(0.860, 0.000, 0.070, 1.000)]
            hover:w-[32rem]
            ${open ? 'w-[32rem]' : 'w-full'}
        `}
		class:open
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
	>
		<div class="flex-1 p-10">
			<slot />
			{#if open || hovered}
				<div
					in:fade={{ delay: 200, duration: 100 }}
					out:fade={{ duration: 40 }}
					class:!open={'overflow-hidden'}
				>
					<h1>Byd</h1>

					<p>Visualise UK data at national and neighbourhood levels.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
