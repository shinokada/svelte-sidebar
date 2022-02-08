<script>
  import Hamburger from "./components/Hamburger.svelte";
  import TopMenu from "./TopMenu.svelte";
  export let headerClass =
    "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2";
  export let siteName = "Demo";
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let topMenus;
  export let siteClass = "w-6/12 h-9 text-lg pt-2 p-8";
  export let siteText;
  export let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1";
  export let topli =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  export let topMenuDiv =
    "container flex flex-wrap justify-end items-center mx-auto dark:bg-gray-800";
</script>

<header class={headerClass}>
  <nav class="flex">
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
