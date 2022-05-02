<script lang="ts">
	import { open, isInert } from './store';
	import { SidebarList, Navbar } from '$lib/index';
	import type { MenuType } from './types';
	export let siteName = 'Demo';
	export let lists: MenuType[];
	export let logo: string = '';
	export let alt: string = '';
	export let headerClass: string = 'bg-gray-200 py-3 px-10 items-center text-gray-600';
	export let navClass = 'py-8 px-4 text-xl';
	export let asideClass = 'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg z-50';
	export let navDivClass = 'pb-10';
	export let logoClass = '';
	export let hamburgerClass: string = '';
	let inert = null;
	$: inert = $isInert ? 'inert' : null;
	$: console.log('isInert', $isInert);
</script>

<Navbar {siteName} {headerClass} {logo} {alt} {logoClass} {hamburgerClass}>
	<slot />
</Navbar>
<aside class={asideClass} class:open={$open} aria-hidden={$isInert} {inert}>
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
