<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, TopMenu } from '$lib/index';
	import { menuList } from '../menus';

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
	let siteName = 'Responsive with fixed top 2';
	let headerClass = 'bg-white py-3 px-8 items-center text-gray-600 border-b-2 px-4';
	let navClass = 'py-8 px-4 bg-white text-base ';
	let navDivClass = 'pb-10';
	let asideClass = 'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';
	let doTransition = false;
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Navbar {siteName} {headerClass} hamburgerClass="lg:hidden">
		<TopMenu {topMenus} />
	</Navbar>
	<Aside {asideClass} {doTransition}>
		<Nav {navClass} {navDivClass}>
			{#each menuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} />
			{/each}
		</Nav>
	</Aside>
</div>
<main class="container mx-auto pt-24 p-8 lg:pl-80">
	<slot />
</main>
