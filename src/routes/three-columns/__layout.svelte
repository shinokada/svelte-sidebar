<script lang="ts">
	import { SidebarItem, DarkMode } from 'flowbite-svelte';
	import {
		ChartPie,
		ShoppingBag,
		Table,
		InboxIn,
		User,
		Login,
		Cog,
		Download,
		Flag,
		Gift,
		Key
	} from 'svelte-heros';

	import { Side, Nav, Responsive } from '$lib/index';
	import { topMenuList } from '../menus';
	import { quartInOut } from 'svelte/easing';

	let navClass = 'flex relative w-full lg:max-w-7xl';

	let navNavClass: string = 'py-8 px-4 text-lg';

	let navDivClass: string = 'pb-8';

	let topMenuDiv = 'flex flex-wrap justify-end mx-auto pt-0 md:pt-2 md:pr-4 hidden xl:block';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let asideClass =
		'fixed lg:absolute w-auto z-30 bg-white h-full  dark:bg-gray-900 dark:text-white';
	let siteName = 'Svelte-Sidebar';
	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';
	let sideWrapperClass = 'fixed lg:absolute z-50 top-0 left-0 w-full';
	let headerClass =
		' z-50 bg-white px-10 items-center text-gray-600 border-b-2 p-4 dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';
	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg dark:text-white';

	let dropDownulClass = 'py-2 space-y-2 pl-9';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	let uid = 1;
	let sidebarItem1 = [
		{
			id: uid++,
			name: 'Svelte-Sidebar',
			href: '/',
			icon: ChartPie,
			iconSize: 16,
			iconClass: 'text-red-500',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Responsive',
			icon: ShoppingBag,
			iconSize: 16,
			iconClass: 'text-blue-500',
			children: [
				{
					id: uid++,
					name: 'Responsive',
					href: '/responsive/top-fix',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Responsive 2',
					href: '/responsive/top-fix-2',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Responsive 3',
					href: '/responsive/top-fix-3',
					rel: 'external'
				}
			]
		},
		{
			id: uid++,
			name: 'No transition',
			icon: Key,
			iconSize: 16,
			iconClass: 'text-blue-500',
			children: [
				{
					id: uid++,
					name: 'No transition',
					href: '/responsive-no-transition/top-fix',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'No transition 2',
					href: '/responsive-no-transition/top-fix-2',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'No transition 3',
					href: '/responsive-no-transition/top-fix-3',
					rel: 'external'
				}
			]
		},
		{
			id: uid++,
			name: 'Transition',
			icon: Cog,
			iconSize: 16,
			iconClass: 'text-blue-500',
			children: [
				{
					id: uid++,
					name: 'Blur',
					href: '/transitions/blur',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Fade',
					href: '/transitions/fade',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Fly-x',
					href: '/transitions/fly-x',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Fly-y',
					href: '/transitions/fly-y',
					rel: 'external'
				},
				{
					id: uid++,
					name: 'Slide',
					href: '/transitions/slide',
					rel: 'external'
				}
			]
		},
		{
			id: uid++,
			name: 'Fixed top menu',
			icon: Table,
			iconSize: 16,
			iconClass: 'text-purple-500',
			href: '/fixed-menu',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Inert',
			icon: InboxIn,
			iconSize: 16,
			iconClass: 'text-yellow-500',
			href: '/inert',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Multiple menus 1',
			icon: InboxIn,
			iconSize: 16,
			iconClass: 'text-yellow-500',
			href: '/multi-custom-style',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Multiple menus 2',
			icon: Login,
			iconSize: 16,
			iconClass: 'text-pink-500',
			href: '/multi-default',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Scroll sidebar',
			icon: Gift,
			iconSize: 16,
			iconClass: 'text-blue-500',
			href: '/scroll-sidebar',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Custom style',
			icon: Flag,
			iconSize: 16,
			iconClass: 'text-pink-500',
			href: '/sidebar-custom-style',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Non-fixed top menu',
			icon: Download,
			iconSize: 16,
			iconClass: 'text-purple-500',
			href: '/topmenu',
			rel: 'external'
		},
		{
			id: uid++,
			name: 'Props',
			icon: User,
			iconSize: 16,
			iconClass: 'text-green-500',
			href: '/props',
			rel: 'external'
		}
	];
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 absolute right-0 top-6 z-50';
</script>

<Responsive />
<div class="container mx-auto relative">
	<DarkMode {btnClass} />
	<Side
		{siteName}
		{siteClass}
		{transitionParams}
		topMenus={topMenuList}
		{headerClass}
		{hamburgerClass}
		{topMenuDiv}
		{childLi}
		{asideClass}
		{spanClass}
		{topul}
		{sideWrapperClass}
		{navClass}
	>
		<Nav navClass={navNavClass} {navDivClass}>
			<SidebarItem links={sidebarItem1} {dropDownulClass} />
		</Nav>
	</Side>

	<div class="flex flex-row">
		<main class="w-full pt-32 lg:pl-60 dark:text-white">
			<slot />
		</main>
		<aside class="w-64 pt-32 px-4 hidden lg:block">
			<h1 class="text-2xl">Right side menu</h1>
			<ul>
				<li>Test 1</li>
				<li>Test 2</li>
				<li>Test 3</li>
				<li>Test 4</li>
				<li>Test 5</li>
			</ul>
		</aside>
	</div>
</div>

<svelte:head>
	<title>Svelte-Sidebar-Menu with Flowbite-Svelte Sidebar Component</title>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</svelte:head>
