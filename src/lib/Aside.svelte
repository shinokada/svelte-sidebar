<script lang="ts">
	import { open, isInert } from './store';
	export let asideClass = 'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg';
	let inert = null;
	$: inert = $isInert ? 'inert' : null;
	// $: console.log('isInert', $isInert);
</script>

<aside class={asideClass} class:open={$open} aria-hidden={$isInert} {inert}>
	<slot />
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}

	[inert] {
		pointer-events: none;
		cursor: default;
	}

	[inert],
	[inert] * {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
		user-select: none;
	}
</style>
