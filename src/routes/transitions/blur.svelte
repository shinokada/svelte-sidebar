<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuList } from '../menus';
	import { quartInOut } from 'svelte/easing';
	let siteName = 'Default Demo';
	sidebarStayOpen.set(false);
	// blur has delay, duration, easing, opacity, and amount params
	let transitionParams = {
		duration: 500,
		amount: 100,
		easing: quartInOut
	};
</script>

<Sidebar
	lists={menuList}
	{siteName}
	transitionType="blur"
	{transitionParams}
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
	<p class="pt-4">
		{lorem}
	</p>
</main>
