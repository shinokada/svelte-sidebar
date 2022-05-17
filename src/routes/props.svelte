<script lang="ts">
	import { Side, Nav, SidebarList, OutsideClick } from '$lib/index';
	import { mainMenuList, topMenuList } from './menus';
	import { quartInOut } from 'svelte/easing';
	import Table from './utils/Table.svelte';
	import TableDefaultRow from './utils/TableDefaultRow.svelte';
	import * as componentProps1 from './props/Aside.json';
	import * as componentProps2 from './props/Dropdown.json';
	import * as componentProps3 from './props/Hamburger.json';
	import * as componentProps4 from './props/Nav.json';
	import * as componentProps5 from './props/Navbar.json';
	import * as componentProps6 from './props/Side.json';
	import * as componentProps7 from './props/Sidebar.json';
	import * as componentProps8 from './props/TopMenu.json';
	let items1 = componentProps1.props;
	let items2 = componentProps2.props;
	let items3 = componentProps3.props;
	let items4 = componentProps4.props;
	let items5 = componentProps5.props;
	let items6 = componentProps6.props;
	let items7 = componentProps7.props;
	let items8 = componentProps8.props;

	let propHeader = ['Name', 'Type', 'Default'];
	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';

	let navNavClass: string = 'py-8 px-4 text-lg';
	// end of Nav

	// SidebarList

	// end of SidebarList

	let siteName = 'Svelte-Sidebar';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	let navDivClass = 'pb-10';
	let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
	let hamburgerClass = 'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2';

	let asideClass = 'absolute w-auto h-screen bg-gray-700 text-white border-r-2 shadow-lg';

	let headerClass = 'bg-gray-700 px-10 items-center text-white border-b-2 py-6';

	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';

	let topul = 'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-3 bg-gray-700';
	let childLi = 'block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg';

	let spanClass = 'pl-2 self-center text-lg font-semibold text-white whitespace-nowrap';
</script>

<OutsideClick>
	<Side {siteName} {siteClass} {asideClass} {transitionParams} topMenus={topMenuList} {headerClass} {hamburgerClass} {topul} {childLi} {spanClass}>
		<Nav navClass={navNavClass} {navDivClass}>
			{#each mainMenuList as { href, name, rel }}
				<SidebarList {href} {name} {rel} {sideBarListClass} />
			{/each}
		</Nav>
	</Side>
</OutsideClick>
<main class="container mx-auto py-32 px-8">
	<h1 class="text-3xl mb-4">Props</h1>
	<p>The component has the following props, type, and default values.</p>

	<h3>Aside</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items1} rowState="hover" />
	</Table>

	<h3>Dropdown</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items2} rowState="hover" />
	</Table>

	<h3>Hamburger</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items3} rowState="hover" />
	</Table>

	<h3>Nav</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items4} rowState="hover" />
	</Table>

	<h3>Navbar</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items5} rowState="hover" />
	</Table>

	<h3>Side</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items6} rowState="hover" />
	</Table>

	<h3>Sidebar</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items7} rowState="hover" />
	</Table>

	<h3>Sidebar</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items7} rowState="hover" />
	</Table>

	<h3>TopMenu</h3>

	<Table header={propHeader} {divClass} {theadClass}>
		<TableDefaultRow items={items8} rowState="hover" />
	</Table>
</main>

<svelte:head>
	<title>Svelte-Sidebar-Menu Props</title>
</svelte:head>

<style>
	h3 {
		font-size: 1.5rem;
		font-weight: 500;
		line-height: 1.2;
		margin: 1.5rem 0;
	}
</style>
