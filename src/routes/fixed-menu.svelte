<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, TopMenu } from '$lib/index';
	import { menuList, lorem } from './menus';
	import { topMenus } from './menus';

	let siteName = 'Fixed Top Menu Demo';
	let asideClass =
		'fixed w-auto bg-white overflow-scroll h-screen py-8 shadow-lg z-50 px-4 min-h-screen';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 p-8';
	let navClass = 'px-4 bg-white text-base ';
	let navDivClass = 'pb-10';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} {headerClass} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar">
		<TopMenu {topMenus} />
	</Navbar>
	<Aside {asideClass}>
		<Nav {navClass} {navDivClass}>
			<h3>Menu 1</h3>
			{#each menuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
		<Nav {navClass} {navDivClass}>
			<h3>Menu 2</h3>
			{#each menuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
</div>

<main class="container mx-auto p-24 pt-40">
	<h1 class="text-3xl">
		{siteName}
	</h1>
	<h2 class="text-2xl w-full">
		<a href="/">Go home long sentence bla bla bla bla bal bal adkjkld</a>
		<span class="text-2xl w-full">Click me here and there and here and there.</span>
	</h2>
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
