<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-sidebar';
</script>

<Navbar {siteName} />
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
