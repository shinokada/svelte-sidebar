<script lang="ts">
	import {
		Aside,
		Nav,
		SidebarList,
		Navbar,
		TopMenu,
		sidebarOpen,
		sidebarIsInert,
		sidebarResponsive
	} from '$lib/index';
	import { lorem, menuList } from './menus';
	$: console.log('open', $sidebarOpen);
	let width: number;
	$: if (width > 1024) {
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
		sidebarResponsive.update((n) => (n = true));
	} else {
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
		sidebarResponsive.update((n) => (n = false)); // when open a sidebar clicking outside closes it
	}
	const topMenus = [
		{
			id: 1,
			name: 'Menu',
			href: '/'
		},
		{
			id: 2,
			name: 'Dropdown',
			href: '/',
			child: [
				{
					id: 3,
					name: 'Dropdown 1-1',
					href: '/'
				},
				{
					id: 4,
					name: 'Dropdown 1-2',
					href: '/'
				},
				{
					id: 5,
					name: 'Dropdown 1-3',
					href: '/'
				}
			]
		},
		{
			id: 6,
			name: 'Dropdown',
			href: '/',
			child: [
				{
					id: 7,
					name: 'Dropdown 2-1',
					href: '/'
				},
				{
					id: 8,
					name: 'Dropdown 2-2',
					href: '/'
				},
				{
					id: 9,
					name: 'Dropdown 2-3',
					href: '/'
				}
			]
		}
	];
	let siteName = 'Responsive with fixed top 3';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 px-4';
	let navClass = 'py-8 px-4 bg-white text-base ';
	let navDivClass = 'pb-10';
	let asideClass = 'absolute w-auto border-r-2 shadow-lg z-50  h-screen overflow-scroll';
</script>

<svelte:window bind:innerWidth={width} />
<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} {headerClass} hamburgerClass="lg:hidden">
		<TopMenu {topMenus} />
	</Navbar>
	<Aside {asideClass}>
		<Nav {navClass} {navDivClass}>
			{#each menuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
</div>
<main class="container mx-auto pt-24 p-8 lg:pl-80">
	<h1 class="text-3xl">
		{siteName}
	</h1>
	<h2 class="text-2xl w-full"><a href="/sidebar-custom-style">Custom Style</a></h2>
	<p class="pt-4">
		<a href="/sidebar-custom-style">Custom Style</a>
		{lorem}
	</p>
	<div inert>
		<h1 class="text-3xl">Inert paragraph</h1>

		<input
			type="text"
			class="
			form-control
			block
			w-full
			font-normal
			text-gray-700
			bg-white bg-clip-padding
			border border-solid border-gray-300		"
			id="exampleFormControlInput1"
			placeholder="Example label"
		/>
		<p class="pt-4">
			{lorem}
		</p>
	</div>
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

<style>
	[inert] {
		pointer-events: none;
		cursor: default;
	}

	[inert],
	[inert] * {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
		user-select: none;
	}
</style>
