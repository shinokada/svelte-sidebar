<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let asideClass = 'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg';
	let inert = null;
	$: inert = $sidebarIsInert ? 'inert' : null;
	// $: console.log('isInert', $isInert);
	let sidebarStatus: boolean;
	let ariaHidden: boolean;
	export let doTransition: boolean = true;

	sidebarOpen.subscribe((value) => {
		if (value === true) {
			sidebarStatus = true;
			ariaHidden = true;
		} else {
			sidebarStatus = false;
			ariaHidden = false;
		}
	});
	// console.log('sidebarStatus', sidebarStatus);
</script>

{#if sidebarStatus && doTransition}
	<aside
		class={asideClass}
		transition:fly={{ delay: 250, duration: 250, x: -100, easing: quintOut }}
		aria-hidden={ariaHidden}
		{inert}
	>
		<slot />
	</aside>
{:else}
	<aside
		class={asideClass}
		class:open={sidebarStatus}
		class:close={!sidebarStatus}
		aria-hidden={ariaHidden}
		{inert}
	>
		<slot />
	</aside>
{/if}

<style>
	.close {
		left: -100%;
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
