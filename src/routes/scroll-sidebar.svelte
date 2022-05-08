<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { lorem, menuList, allMenuList } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Scroll Sidebar Demo';
	let asideClass =
		'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg z-50  h-screen overflow-scroll';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
	<Aside {asideClass}>
		<Nav>
			<h3>Side Menu</h3>
			{#each menuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
		<Nav>
			<h3>Long Side Menu</h3>
			{#each allMenuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
		<Nav>
			<h3>Long Side Menu</h3>
			{#each allMenuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
</div>

<main class="container mx-auto p-24">
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
