<script lang="ts">
	import Layout from '$components/map/Layout.svelte';

	import '$styles/app.css';

	import { browser } from '$app/environment';
	import { Buffer } from 'buffer';
	import EventEmitter from 'events';
	import process from 'process';

	if (browser) {
		window.Buffer = Buffer;
		window.process = process;
		(window as any).EventEmitter = EventEmitter;
		window.global = window;
	}
</script>

<Layout><slot /></Layout>
