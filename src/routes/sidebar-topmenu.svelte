<script lang="ts">
	import { Sidebar, TopMenu } from '$lib/index';
	import { lorem, menuList, topMenus } from './menus';
	let siteName = 'Svelte-sidebar';
</script>

<Sidebar lists={menuList} {siteName}>
	<TopMenu {topMenus} />
</Sidebar>
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
