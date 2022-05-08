<script lang="ts">
	import { Sidebar, TopMenu } from '$lib/index';
	import { lorem, menuList, topMenus } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Fixed Top Menu Sidebar';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Sidebar lists={menuList} {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar">
		<TopMenu {topMenus} />
	</Sidebar>
</div>

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
