<script lang="ts">
	import { sidebarStayOpen } from '$lib/index';
	import { Aside, Navbar, Nav, SidebarList, TopMenu, Responsive } from '$lib/index';
	import { lorem, menuListResponsiveTransition, mainMenuList } from '../menus';
	import { sineIn } from 'svelte/easing';
	let siteName = 'Svelte-Sidebar';
	let title = 'Responsive Slide Transition';
	sidebarStayOpen.set(false);
	// slide has delay, duration, and easing prameters
	let transitionParams = {
		duration: 800,
		delay: 0,
		easing: sineIn
	};
	let headerClass = 'bg-white pt-4 px-10 items-center text-gray-600 border-b-2 px-4';
	let navClass = 'py-8 px-4 bg-white text-lg ';
	let navDivClass = 'pb-10';
	let asideClass = 'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';
	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white';
</script>

<Responsive />
<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} {headerClass} hamburgerClass="lg:hidden">
		<TopMenu topMenus={mainMenuList} {topul} />
	</Navbar>
	<Aside {asideClass} transitionType="slide" {transitionParams}>
		<Nav {navClass} {navDivClass}>
			{#each menuListResponsiveTransition as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
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
