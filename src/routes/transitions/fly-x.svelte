<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuListTransition } from '../menus';
	import { sineIn } from 'svelte/easing';
	let siteName = 'Svelte-Sidebar';
	let title = 'Non-Responsive Fly Demo';
	sidebarStayOpen.set(false);
	// fly has delay, duration, easing, x, y, opacity prarams
	let transitionParams = {
		x: -200,
		duration: 300,
		easing: sineIn
	};
	let asideClass = 'absolute w-80 border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Sidebar
		lists={menuListTransition}
		{siteName}
		transitionType="fly"
		{transitionParams}
		logo="/images/svelte-sidebar-logo.png"
		alt="Svelte Sidebar"
		{asideClass}
	/>
</div>

<main class="container mx-auto py-32 px-8">
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
