<script lang="ts">
	import { Side, Nav, SidebarList, OutsideClick } from '$lib/index';
	import { mainMenuList, lorem } from './menus';
	import { quartInOut } from 'svelte/easing';

	// Nav
	// Nav navClass
	let navNavClass: string = 'py-8 px-4 text-lg';
	// end of Nav

	// SidebarList

	// end of SidebarList

	let siteName = 'Svelte-Sidebar';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	let navDivClass = 'pb-10';
	let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
	let hamburgerClass =
		'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
	let asideClass = 'absolute w-auto h-screen bg-gray-700 text-white border-r-2 shadow-lg';
	let headerClass = 'bg-gray-700 pt-4 px-10 items-center text-white border-b-2';

	let siteClass = 'w-1/4 h-12 text-lg pt-1 pl-12';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-gray-700 ';
	let childLi =
		'block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-base';

	let spanClass = 'pl-2 self-center text-lg font-semibold text-white whitespace-nowrap';
</script>

<OutsideClick>
	<Side
		{siteName}
		{siteClass}
		{asideClass}
		{transitionParams}
		topMenus={mainMenuList}
		{headerClass}
		{hamburgerClass}
		{topul}
		{childLi}
		{spanClass}
	>
		<Nav navClass={navNavClass} {navDivClass}>
			{#each mainMenuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
	</Side>
</OutsideClick>
<main class="container mx-auto py-32 px-8">
	<h1 class="text-4xl text-center py-8">
		{siteName}
	</h1>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
</main>
