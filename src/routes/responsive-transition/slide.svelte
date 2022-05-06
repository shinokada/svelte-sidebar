<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { Responsive } from '$lib/index';
	import { lorem, menuList } from '../menus';
	import { sineIn } from 'svelte/easing';
	let siteName = 'Default Demo';
	sidebarStayOpen.set(false);
	// slide has delay, duration, and easing prameters
	let transitionParams = {
		duration: 800,
		delay: 0,
		easing: sineIn
	};
</script>

<Responsive />
<Sidebar
	lists={menuList}
	{siteName}
	transitionType="slide"
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
