<script>
  import { open } from "./store";
  import SidebarList from "./SidebarList.svelte";
  import Navbar from "./Navbar.svelte";
  export let siteName = "Demo";
  export let lists = [
    { url: "item1", name: "Item 1", relext: "external" },
    { url: "item2", name: "Item 2", relext: "external" },
  ];
  export let headerClass =
    "bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2";
  export let navClass = "p-12 text-xl";
  export let hamburgerClass =
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none";
  export let asideClass =
    "absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg z-50";
  export let navDivClass = "pb-10";
  export let topMenus;
  export let topul;
  export let topli;
</script>

<Navbar {siteName} {headerClass} {hamburgerClass} {topMenus} {topul} {topli} />
<aside class={asideClass} class:open={$open}>
  <nav class={navClass}>
    <div class={navDivClass}>
      {#each lists as { url, name, relext }}
        <SidebarList {url} {name} {relext} />
      {/each}
    </div>
  </nav>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
