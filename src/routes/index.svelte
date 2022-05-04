<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Default Demo';
	sidebarStayOpen.set(false);
</script>

<Sidebar lists={menuList} {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
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
	<p class="pt-4">
		{lorem}
	</p>
</main>

<style>
	[inert] {
		pointer-events: none;
		cursor: default;
	}

	[inert],
	[inert] * {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
		user-select: none;
	}
</style>
