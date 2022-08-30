<script lang="ts">
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from './sidebarStore';
	export let href: string;
	export let name: string;
	export let rel: string = null;
	export let sideBarListClass: string = 'border-b border-gray-400 mb-2 px-4';
	function toggleSide() {
		// console.log('SidebarList', $sidebarStayOpen);
		if (!sidebarStayOpen) {
			sidebarOpen.update((n) => (n = !n));
			sidebarIsInert.update((n) => (n = !n));
		}
	}
</script>

{#if $sidebarStayOpen === true}
	<div class="{sideBarListClass} {$$props.class ? $$props.class : ''}">
		<a class="block" {href} {rel}>{name}</a>
	</div>
{:else}
	<div class="{sideBarListClass} {$$props.class ? $$props.class : ''}">
		<a class="block" {href} {rel} on:click={toggleSide}>{name}</a>
	</div>
{/if}
