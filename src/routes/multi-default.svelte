<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Multi-menu Sidebar';
</script>

<Navbar {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
<Aside>
	<Nav>
		<h3>Menu 1</h3>
		{#each menuList as { href, name, rel }}
			<SidebarList {href} {name} {rel} />
		{/each}
	</Nav>
	<Nav>
		<h3>Menu 2</h3>
		{#each menuList as { href, name, rel }}
			<SidebarList {href} {name} {rel} />
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
