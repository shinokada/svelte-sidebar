<script lang="ts">
	import { Side, Nav, SidebarList } from '$lib/index';
	import { menuListResponsiveNoTransition, topMenus } from '../menus';

	// Nav
	// Nav navClass
	export let navNavClass: string = 'py-8 px-4 text-lg';

	export let navDivClass: string = 'pb-8';
	// end of Nav

	// SidebarList
	export let sideBarListClass: string = 'border-b border-gray-400 mb-2 px-4';
	// end of SidebarList

	let siteName = 'Svelte-Sidebar';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 px-4';
	let transitionType = undefined;
</script>

<Side {siteName} {transitionType} {topMenus} {headerClass}>
	<Nav navClass={navNavClass} {navDivClass}>
		{#each menuListResponsiveNoTransition as { href, name, rel }}
			<SidebarList {href} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
</Side>
<main class="container mx-auto pt-24 p-8 lg:pl-80">
	<slot />
</main>
