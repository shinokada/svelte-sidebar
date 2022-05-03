<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	export let href: string;
	export let rel: string = null;
	export let name: string;
	export let sideBarListClass = 'border-b border-gray-400 mb-2 px-4';
	function toggleSide() {
		sidebarOpen.update((n) => (n = !n));
		sidebarIsInert.update((n) => (n = !n));
	}
</script>

<div class={sideBarListClass}>
	<a class="block" {href} {rel} on:click={toggleSide}>{name}</a>
</div>
