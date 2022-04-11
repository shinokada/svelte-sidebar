<script lang="ts">
	import { Sidebar } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Default Sidebar';
</script>

<Sidebar lists={menuList} {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
<main class="container mx-auto p-24">
	<h1 class="text-3xl">
		{siteName}
	</h1>
	<h2 class="text-2xl w-full"><a href="/sidebar-custom-style">Custom Style</a></h2>
	<p class="pt-4">
		<a href="/sidebar-custom-style">Custom Style</a>
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
