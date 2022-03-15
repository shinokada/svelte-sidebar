<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { lorem, longMenuList } from './menus';
	let siteName = 'Scroll Sidebar';
	let asideClass =
		'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg z-50  h-screen overflow-scroll';
</script>

<Navbar {siteName} />

<Aside {asideClass}>
	<Nav>
		<h3>Long Side Menu</h3>
		{#each longMenuList as { href, name, rel }}
			<SidebarList {href} {name} {rel} />
		{/each}
	</Nav>
</Aside>

<main class="container mx-auto p-16">
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
