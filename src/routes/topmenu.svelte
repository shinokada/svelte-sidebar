<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, TopMenu, OutsideClick } from '$lib/index';
	import { menuList, lorem, mainMenuList, topMenuList } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Top Menu';
	let asideClass =
		'fixed w-auto bg-white overflow-scroll h-screen py-8 shadow-lg z-50 px-4 min-h-screen';
	// let headerClass = 'bg-white pt-4 px-10 items-center text-gray-600 border-b-2 p-8';
	let navClass = 'px-4 bg-white text-lg ';
	let navBarNavClass = 'relative flex';
	let navDivClass = 'pb-10';
	// let topMenuDiv = 'w-3/4 container flex flex-wrap justify-end mx-auto';
	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-gray-200 ';
	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg';

	let siteClass = 'w-1/4 h-12 text-lg pt-2 pl-12';
	let headerClass = 'bg-gray-200 px-10 items-center text-gray-600 p-4';
	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-1';
	let topMenuDiv = 'w-3/4 container flex flex-wrap justify-end mx-auto pt-0 md:pt-1';
</script>

<div class="w-full">
	<OutsideClick>
		<Navbar
			{siteName}
			navClass={navBarNavClass}
			{headerClass}
			{hamburgerClass}
			{siteClass}
			logo="/images/svelte-sidebar-logo.png"
			alt="Svelte Sidebar"
		>
			<TopMenu topMenus={topMenuList} {topMenuDiv} {topul} {childLi} />
		</Navbar>
		<Aside {asideClass}>
			<Nav {navClass} {navDivClass}>
				{#each menuList as { href, name, rel }}
					<SidebarList {href} {name} {rel} />
				{/each}
			</Nav>
		</Aside>
	</OutsideClick>
</div>

<main class="container mx-auto p-16">
	<h1 class="text-4xl text-center py-8">
		{title}
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
</main>

<svelte:head>
	<title>Svelte-Sidebar-Menu Top Menu Example</title>
</svelte:head>
