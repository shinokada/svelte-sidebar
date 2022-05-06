<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	export let asideClass = 'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg';
	let inert = null;
	$: inert = $sidebarIsInert ? 'inert' : null;
	// $: console.log('isInert', $isInert);
	let sidebarStatus: boolean;
	let ariaHidden: boolean;

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

<aside class={asideClass} class:open={sidebarStatus} aria-hidden={ariaHidden} {inert}>
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
