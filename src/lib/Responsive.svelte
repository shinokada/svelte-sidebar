<script lang="ts">
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from './store';
	import { onMount } from 'svelte';
	export let breakPoint: number = 1024;
	let width: number;
	$: if (width >= breakPoint) {
		sidebarStayOpen.update((n) => (n = true));
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
	} else {
		sidebarStayOpen.update((n) => (n = false));
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
	}
	onMount(() => {
		console.log('innerwidth', width);
		if (width >= breakPoint) {
			sidebarStayOpen.update((n) => (n = true));
			console.log('Responsive sidebarStayOpen', $sidebarStayOpen);
			sidebarOpen.update((n) => (n = true));
			sidebarIsInert.update((n) => (n = false));
		} else {
			sidebarStayOpen.update((n) => (n = false));
			console.log('Responsive sidebarStayOpen', $sidebarStayOpen);
			sidebarOpen.update((n) => (n = false));
			sidebarIsInert.update((n) => (n = true));
		}
	});
</script>

<svelte:window bind:innerWidth={width} />
