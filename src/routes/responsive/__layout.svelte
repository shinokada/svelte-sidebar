<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, TopMenu } from '$lib/index';
	import { menuListResponsive, topMenus } from '../menus';
	import { quartInOut } from 'svelte/easing';

	let siteName = 'Svelte-Sidebar';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 px-4';
	let navClass = 'py-8 px-4 bg-white text-base ';
	let navDivClass = 'pb-10';
	let asideClass = 'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';
	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} {headerClass} hamburgerClass="lg:hidden">
		<TopMenu {topMenus} />
	</Navbar>
	<Aside {asideClass} transitionType="fly" {transitionParams}>
		<Nav {navClass} {navDivClass}>
			{#each menuListResponsive as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
</div>
<main class="container mx-auto pt-24 p-8 lg:pl-80">
	<slot />
</main>
