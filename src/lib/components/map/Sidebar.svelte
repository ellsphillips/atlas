<script lang="ts">
	import { fade } from 'svelte/transition';

	import Hamburger from '$components/Hamburger.svelte';
	import icons from '$components/icons';
	import GitHub from '../icons/GitHub.svelte';

	export let open = true;
	let hovered = false;
</script>

<aside
	class={`
        max-w-lg bg-gray-900 h-screen
        flex shrink-0
        transition-[width] duration-200 delay-150 ease-[cubic-bezier(0.860, 0.000, 0.070, 1.000)]
        hover:w-[32rem]
        overflow-hidden xl:overflow-y-auto
        xl:mt-0 xl:border-r-black xl:border-r-[2px]
        ${open ? 'w-[32rem]' : 'w-full'}
    `}
	class:open
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<nav class="flex flex-col gap-6 p-6 bg-gray-950/50">
		<button
			on:click={() => (open = !open)}
			class={`mb-8 mx-auto w-6 h-6 flex items-center justify-center rotate-0 transition-transform`}
			class:rotate-90={!open}
		>
			<Hamburger />
		</button>

		{#each icons as icon}
			<svelte:component
				this={icon}
				class="w-8 text-gray-300 hover:text-gray-500 cursor-not-allowed"
			/>
		{/each}

		<a href="https://www.github.com/ellsphillips/byd" class="mt-auto">
			<GitHub class="w-8 text-gray-300 hover:text-gray-500 cursor-pointer" />
		</a>
	</nav>

	<div class="flex w-full">
		{#if open || hovered}
			<div in:fade={{ delay: 50, duration: 100 }} out:fade={{ duration: 150 }} class="p-6">
				<slot />
			</div>
		{/if}
	</div>
</aside>
