<script lang="ts">
	import { Aside, SidebarList, Nav, Navbar } from '$lib/index';
	let siteName = 'Svelte-sidebar Multiple-menu Default';
	let lists = [
		{ href: '', name: 'Home' },
		{ href: 'sidebar-default', name: 'Item 1' },
		{ href: 'sidebar-custom', name: 'Item 2' },
		{ href: 'sidebar-multi-default', name: 'Item 3' }
	];
	let lists2 = [
		{ href: '', name: 'Profile' },
		{ href: 'sidebar-default', name: 'Item 4' },
		{ href: 'sidebar-custom', name: 'Item 5' },
		{ href: 'sidebar-multi-default', name: 'Item 6' }
	];
</script>

<Navbar {siteName} />
<Aside>
	<Nav>
		<h3>Menu 1</h3>
		{#each lists as list}
			<SidebarList href={list.href} name={list.name} />
		{/each}
	</Nav>
	<Nav>
		<h3>Menu 2</h3>
		{#each lists2 as list}
			<SidebarList href={list.href} name={list.name} />
		{/each}
	</Nav>
</Aside>

<main class="container mx-auto p-8">
	<h1 class="text-3xl">{siteName}</h1>
</main>
