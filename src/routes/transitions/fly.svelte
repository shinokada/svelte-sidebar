<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuList } from '../menus';
	import { sineIn } from 'svelte/easing';
	let siteName = 'Default Demo';
	sidebarStayOpen.set(false);
	// fly has delay, duration, easing, x, y, opacity prarams
	let transitionParams = {
		y: 200,
		duration: 300,
		easing: sineIn
	};
</script>

<Sidebar
	lists={menuList}
	{siteName}
	transitionType="fly"
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
