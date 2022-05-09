<script lang="ts">
	import { Aside, Navbar, TopMenu, OutsideClick } from '$lib/index';
	import type { TopMenuType, TransitionParamTypes, TransitionTypes } from './types';
	import { sidebarOpen } from './store';

	// Navbar
	export let alt: string = '';

	export let hamburgerClass: string =
		'text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none lg:hidden';

	export let headerClass: string = 'bg-gray-200 pt-4 px-10 items-center text-gray-600';

	export let logo: string = '';

	export let logoClass: string = '';

	export let navClass = 'flex relative';

	export let siteClass: string = 'w-1/3 h-12 text-lg pt-1 pl-12';

	export let siteName: string = 'Demo';

	export let spanClass: string =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap';
	// end of Navbar

	// TopMenu
	export let buttonClass: string =
		'inline-flex items-center text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200';

	export let childLi: string =
		'block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-base';

	export let topMenuDiv: string = 'container flex flex-wrap justify-end mx-auto';

	export let topMenus: TopMenuType[];

	export let topul: string =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white';

	export let topli: string =
		'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0';

	export let activeDropdownDiv: string =
		'z-10 w-44 text-lg list-none bg-white rounded divide-y divide-gray-100 shadow';

	export let activeChildLi: string = 'block py-2 px-4 text-base text-gray-700 hover:bg-gray-100';

	export let dropdownLi: string =
		'flex justify-between items-center py-2 pr-4 pl-3 w-full text-base font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto';
	// end of TopMenu

	// Aside
	export let asideClass: string =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll';

	export let transitionParams: TransitionParamTypes = {};

	export let transitionType: TransitionTypes = 'fly';
	// end of Aside

	// sideWrapper
	export let sideWrapperClass: string = 'fixed z-50 top-0 left-0 w-full';
	// end of sideWrapper

	// $: console.log('Side sidebarOpen', $sidebarOpen);
</script>

{#if $sidebarOpen}
	<OutsideClick>
		<div class={sideWrapperClass}>
			<Navbar
				{alt}
				{hamburgerClass}
				{headerClass}
				{logo}
				{logoClass}
				{navClass}
				{siteClass}
				{siteName}
				{spanClass}
			>
				<TopMenu
					{buttonClass}
					{childLi}
					{topMenuDiv}
					{topMenus}
					{topul}
					{topli}
					{activeDropdownDiv}
					{activeChildLi}
					{dropdownLi}
				/>
			</Navbar>

			<Aside {asideClass} {transitionType} {transitionParams}>
				<slot />
			</Aside>
		</div>
	</OutsideClick>
{:else}
	<div class={sideWrapperClass}>
		<Navbar
			{alt}
			{hamburgerClass}
			{headerClass}
			{logo}
			{logoClass}
			{navClass}
			{siteClass}
			{siteName}
			{spanClass}
		>
			<TopMenu
				{buttonClass}
				{childLi}
				{topMenuDiv}
				{topMenus}
				{topul}
				{topli}
				{activeDropdownDiv}
				{activeChildLi}
				{dropdownLi}
			/>
		</Navbar>
		<OutsideClick>
			<Aside {asideClass} {transitionType} {transitionParams}>
				<slot />
			</Aside>
		</OutsideClick>
	</div>
{/if}
