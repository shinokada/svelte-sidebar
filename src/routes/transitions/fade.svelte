<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuListTransition } from '../menus';
	import { sineIn } from 'svelte/easing';
	let siteName = 'Svelte-Sidebar';
	let title = 'Fade Demo';
	sidebarStayOpen.set(false);
	// fade has delay, duration, and easing prameters
	let transitionParams = {
		duration: 500,
		delay: 200,
		easing: sineIn
	};
	let asideClass = 'absolute w-80 border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';
</script>

<Sidebar
	lists={menuListTransition}
	{siteName}
	transitionType="fade"
	{transitionParams}
	logo="/images/svelte-sidebar-logo.png"
	alt="Svelte Sidebar"
	{asideClass}
/>
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
</main>
