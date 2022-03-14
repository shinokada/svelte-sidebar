<script lang="ts">
	import { open } from './store';
	import { SidebarList, Navbar } from '$lib/index';
	import type { MenuType } from './types';
	export let siteName = 'Demo';
	export let lists: MenuType[];
	export let headerClass: string = '';
	export let navClass = 'p-8 text-xl';
	export let asideClass = 'absolute w-auto bg-gray-200 border-r-2 shadow-lg z-50';
	export let navDivClass = 'pb-10';
</script>

<Navbar {siteName} {headerClass}>
	<slot />
</Navbar>
<aside class={asideClass} class:open={$open}>
	<nav class={navClass}>
		<div class={navDivClass}>
			{#each lists as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</div>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
