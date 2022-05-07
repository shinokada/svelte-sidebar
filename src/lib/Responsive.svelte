<script lang="ts">
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from './store';
	export let breakPoint: number = 1024;
	let width: number;
	$: if (width >= breakPoint) {
		if (!$sidebarStayOpen) {
			sidebarOpen.update((n) => (n = true));
		}
		sidebarIsInert.update((n) => (n = false));
		sidebarStayOpen.update((n) => (n = true));
	} else {
		if (!$sidebarStayOpen) {
			sidebarOpen.update((n) => (n = false));
		}
		sidebarIsInert.update((n) => (n = true));
		sidebarStayOpen.update((n) => (n = false)); // when open a sidebar clicking outside closes it
	}
</script>

<svelte:window bind:innerWidth={width} />
