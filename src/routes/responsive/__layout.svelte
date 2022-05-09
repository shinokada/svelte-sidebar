<script lang="ts">
	import { Side, Nav, SidebarList } from '$lib/index';
	import { menuListResponsive, mainMenuList } from '../menus';
	import { quartInOut } from 'svelte/easing';

	// Nav
	// Nav navClass
	export let navNavClass: string = 'py-8 px-4 text-lg';

	export let navDivClass: string = 'pb-8';
	// end of Nav

	// SidebarList
	export let sideBarListClass: string = 'border-b border-gray-400 mb-2 px-4';
	// end of SidebarList

	let siteName = 'Svelte-Sidebar';
	let siteClass = 'w-1/3 h-12 text-lg pt-1 pl-12';
	let headerClass = 'bg-white pt-4 px-10 items-center text-gray-600 border-b-2 px-4';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};
</script>

<Side {siteName} {siteClass} {transitionParams} topMenus={mainMenuList} {headerClass}>
	<Nav navClass={navNavClass} {navDivClass}>
		{#each menuListResponsive as { href, name, rel }}
			<SidebarList {href} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
</Side>
<main class="container mx-auto py-32 px-8 lg:pl-80">
	<slot />
</main>
