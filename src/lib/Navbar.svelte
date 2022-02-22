<script>
  import Hamburger from "./components/Hamburger.svelte";
  import TopMenu from "./TopMenu.svelte";

  // TopMenu
  export let activeDropdownDiv =
    "z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow";
  export let buttonClass =
    "inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200";
  export let activeChildLi =
    "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100";
  export let childLi =
    "block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-sm";
  export let dropdownLi =
    "flex justify-between items-center py-2 pr-4 pl-3 w-full text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto";
  export let topMenuDiv = "container flex flex-wrap justify-end mx-auto";
  export let topMenus;
  export let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1";
  export let topli =
    "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

  // Others
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let headerClass = "bg-gray-200 py-3 px-10 items-center text-gray-600";
  export let navClass = "flex relative";
  export let siteName = "Demo";
  export let siteClass = "w-full h-9 text-lg pt-1 pl-12";
  export let siteText;
</script>

<header class={headerClass}>
  <nav class={navClass}>
    <Hamburger class={hamburgerClass} />
    <div class={siteClass}>
      <div class={siteText}><a href="/">{siteName}</a></div>
    </div>
    <slot>
      {#if topMenus}
        <TopMenu
          {activeDropdownDiv}
          {activeChildLi}
          {buttonClass}
          {childLi}
          {dropdownLi}
          {topMenus}
          {topMenuDiv}
          {topul}
          {topli}
        />
      {/if}
    </slot>
  </nav>
</header>
