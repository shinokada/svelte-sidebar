<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	import { SidebarList, Navbar } from '$lib/index';
	import type { MenuType } from './types';
	export let siteName = 'Demo';
	export let lists: MenuType[];
	export let logo: string = '';
	export let alt: string = '';
	export let headerClass: string = 'bg-gray-200 py-3 px-10 items-center text-gray-600';
	export let navClass = 'py-8 px-4 text-base';
	export let asideClass = 'absolute w-auto h-screen bg-white border-r-2 shadow-lg z-50';
	export let navDivClass = 'pb-10';
	export let logoClass = '';
	export let hamburgerClass: string = '';
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

<Navbar {siteName} {headerClass} {logo} {alt} {logoClass} {hamburgerClass}>
	<slot />
</Navbar>
<aside class={asideClass} class:open={sidebarStatus} aria-hidden={ariaHidden} {inert}>
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
