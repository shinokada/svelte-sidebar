<script lang="ts">
	import { Sidebar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Custom Style';
	let headerClass = 'bg-pink-300 py-3 px-10 items-center text-white border-b-2';
	let asideClass = 'absolute w-auto h-screen bg-red-50 pt-8 border-r-2 shadow-lg';
	let navClass = 'p-5 text-base';
</script>

<Sidebar
	lists={menuList}
	{siteName}
	{headerClass}
	{asideClass}
	{navClass}
	logo="/images/svelte-sidebar-logo.png"
	alt="Svelte Sidebar"
/>
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
