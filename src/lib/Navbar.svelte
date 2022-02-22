<script>
  import Hamburger from "./components/Hamburger.svelte";
  import TopMenu from "./TopMenu.svelte";
  export let headerClass = "bg-gray-200 py-3 px-10 items-center text-gray-600";
  export let siteName = "Demo";
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let topMenus;
  export let siteClass = "w-full h-9 text-lg pt-1 pl-12";
  export let siteText;
  export let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1";
  export let topli =
    "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
  export let topMenuDiv = "container flex flex-wrap justify-end mx-auto";
  export let navClass = "flex relative";
</script>

<header class={headerClass}>
  <nav class={navClass}>
    <Hamburger class={hamburgerClass} />
    <div class={siteClass}>
      <div class={siteText}><a href="/">{siteName}</a></div>
    </div>
    <slot>
      {#if topMenus}
        <TopMenu {topMenus} {topMenuDiv} {topul} {topli} />
      {/if}
    </slot>
  </nav>
</header>
