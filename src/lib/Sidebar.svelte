<script>
  import { open } from "./store";
  import SidebarList from "./SidebarList.svelte";
  import Navbar from "./Navbar.svelte";
  export let siteName = "Demo";
  export let lists = [
    { url: "item1", name: "Item 1", rel: "external" },
    { url: "item2", name: "Item 2", rel: "external" },
  ];
  export let headerClass;
  export let navClass = "p-8 text-xl";
  export let hamburgerClass;
  export let asideClass =
    "absolute w-auto bg-gray-200 border-r-2 shadow-lg z-50";
  export let navDivClass = "pb-10";
  export let topMenus;
  export let topul;
  export let topli;
</script>

<Navbar {siteName} {headerClass} {hamburgerClass} {topMenus} {topul} {topli} />
<aside class={asideClass} class:open={$open}>
  <nav class={navClass}>
    <div class={navDivClass}>
      {#each lists as { url, name, rel }}
        <SidebarList {url} {name} {rel} />
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
