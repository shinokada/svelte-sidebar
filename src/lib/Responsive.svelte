<script lang="ts">
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from './store';
	export let breakPoint: number = 1024;
	let width: number;
	$: if (width >= breakPoint) {
		if (!$sidebarStayOpen) {
			sidebarOpen.update((n) => (n = true));
		}
		sidebarIsInert.update((n) => (n = false));
	} else {
		if (!$sidebarStayOpen) {
			sidebarOpen.update((n) => (n = false));
		}
		sidebarIsInert.update((n) => (n = true));
	}
</script>

<svelte:window bind:innerWidth={width} />
