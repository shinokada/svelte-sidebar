<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, OutsideClick } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Multi-menu Sidebar';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<OutsideClick>
		<Navbar {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
		<Aside>
			<Nav>
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
	</OutsideClick>
</div>

<main class="container mx-auto py-32 px-8">
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
