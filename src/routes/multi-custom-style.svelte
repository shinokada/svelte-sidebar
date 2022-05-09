<script lang="ts">
	import { Aside, Nav, SidebarList, Navbar, OutsideClick } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Custom Styled Multi-menu Sidebar';
	let navClass = 'p-5 text-lg';
	let navDivClass = 'pb-10';
	let sideBarListClass = 'mb-2 px-4 hover:text-gray-500';
	let hamburgerClass =
		'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
	let asideClass = 'absolute w-auto h-screen bg-gray-700 text-white border-r-2 shadow-lg';
	let headerClass = 'bg-gray-700 pt-4 px-10 items-center text-white border-b-2';
	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap text-white';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<OutsideClick>
		<Navbar
			{siteName}
			{hamburgerClass}
			{headerClass}
			{spanClass}
			logo="/images/svelte-sidebar-logo.png"
			alt="Svelte Sidebar"
		/>
		<Aside {asideClass}>
			<Nav {navClass} {navDivClass}>
				{#each menuList as { href, name }}
					<SidebarList {href} {name} {sideBarListClass} />
				{/each}
			</Nav>
			<Nav {navClass}>
				<h3>Menu 2</h3>
				{#each menuList as { href, name }}
					<SidebarList {href} {name} {sideBarListClass} />
				{/each}
			</Nav>
		</Aside>
	</OutsideClick>
</div>

<main class="container mx-auto py-32 px-8">
	<h1 class="text-4xl text-center py-8">
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
