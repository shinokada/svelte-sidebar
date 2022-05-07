<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Custom Styled Multi-menu Sidebar';
	let navClass = 'p-5 text-lg';
	let navDivClass = 'pb-10';
	let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
	let hamburgerClass =
		'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
	let asideClass = 'absolute w-auto h-screen bg-gray-700 text-white border-r-2 shadow-lg';
	let headerClass = 'bg-gray-700 py-3 px-10 items-center text-white border-b-2';
	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap text-white';
</script>

<Navbar
	{siteName}
	{hamburgerClass}
	{headerClass}
	{spanClass}
	logo="/images/svelte-sidebar-logo.png"
	alt="Svelte Sidebar"
/>
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
	<h1 class="text-4xl text-center">
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
</main>
