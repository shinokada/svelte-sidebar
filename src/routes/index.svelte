<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, mainMenuList } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Default Demo';
	sidebarStayOpen.set(false);
	let transitionParams = {
		duration: 400,
		x: -200,
		delay: 100
	};
	let sideBarListClass: string = 'border-b border-gray-400 mb-2 py-4 px-4 text-xl font-bold';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Sidebar
		lists={mainMenuList}
		{siteName}
		{transitionParams}
		{sideBarListClass}
		logo="/images/svelte-sidebar-logo.png"
		alt="Svelte Sidebar"
	/>
</div>

<main class="container mx-auto p-24">
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
</main>
