<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-sidebar';
	let navClass = 'p-5 text-lg';
	let navDivClass = 'pb-10';
	let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
	let hamburgerClass =
		'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
	let asideClass = 'absolute w-auto bg-gray-700 text-white border-r-2 shadow-lg';
	let headerClass = 'bg-gray-700 py-3 px-10 items-center text-white border-b-2';
</script>

<Navbar {siteName} {hamburgerClass} {headerClass} />
<Aside {asideClass}>
	<Nav {navClass} {navDivClass}>
		<h3>Menu 1</h3>
		{#each menuList as { href, name }}
			<SidebarList {href} {name} {sideBarListClass} />
		{/each}
	</Nav>
	<Nav {navClass}>
		<h3>Menu 2</h3>
		{#each menuList as { href, name }}
			<SidebarList {href} {name} {sideBarListClass} />
		{/each}
	</Nav>
</Aside>

<main class="container mx-auto p-24">
	<h1 class="text-3xl">
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
</main>
