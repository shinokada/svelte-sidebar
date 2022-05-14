<script lang="ts">
	import { Side, Nav, SidebarList } from '$lib/index';
	import { menuListResponsiveNoTransition, topMenuList } from '../menus';

	// Nav
	// Nav navClass
	export let navNavClass: string = 'py-8 px-4 text-lg';

	export let navDivClass: string = 'pb-8';
	// end of Nav

	// SidebarList
	export let sideBarListClass: string = 'border-b border-gray-400 mb-2 px-4';
	// end of SidebarList

	let topMenuDiv = 'container flex flex-wrap justify-end mx-auto pt-0 md:pt-2';

	let siteName = 'Svelte-Sidebar';
	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';

	let headerClass = 'bg-white px-10 items-center text-gray-600 border-b-2 p-4';

	let hamburgerClass = 'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let childLi = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg';

	let transitionType = undefined;
</script>

<Side {siteName} {transitionType} topMenus={topMenuList} {headerClass} {topMenuDiv} {siteClass} {hamburgerClass} {childLi}>
	<Nav navClass={navNavClass} {navDivClass}>
		{#each menuListResponsiveNoTransition as { href, name, rel }}
			<SidebarList {href} {name} {rel} {sideBarListClass} />
		{/each}
	</Nav>
</Side>
<main class="container mx-auto py-32 px-8 lg:pl-80">
	<slot />
</main>
