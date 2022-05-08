<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, TopMenu, OutsideClick } from '$lib/index';
	import { menuList, lorem } from './menus';
	import { topMenus } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Fixed Top Menu Demo';
	let asideClass =
		'fixed w-auto bg-white overflow-scroll h-screen py-8 shadow-lg z-50 px-4 min-h-screen';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 p-8';
	let navClass = 'px-4 bg-white text-lg ';
	let navBarNavClass = 'relative';
	let navDivClass = 'pb-10';
	let topMenuDiv = 'absolute top-1 right-2 container flex flex-wrap justify-end mx-auto';
	let topli =
		'w-full py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<OutsideClick>
		<Navbar
			{siteName}
			{headerClass}
			navClass={navBarNavClass}
			logo="/images/svelte-sidebar-logo.png"
			alt="Svelte Sidebar"
		>
			<TopMenu {topMenus} {topMenuDiv} {topli} />
		</Navbar>
		<Aside {asideClass}>
			<Nav {navClass} {navDivClass}>
				<h3>Menu 1</h3>
				{#each menuList as { href, name, rel }}
					<SidebarList {href} {name} {rel} />
				{/each}
			</Nav>
		</Aside>
	</OutsideClick>
</div>

<main class="container mx-auto p-24">
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
</main>
