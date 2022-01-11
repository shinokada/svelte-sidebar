<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let siteName = "Multiple menu items";
  export let lists = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
  export let lists2 = [
    { url: "item1", name: "Item 1" },
    { url: "item2", name: "Item 2" },
  ];
  export let navClass = "pt-2 px-12 text-xl";
</script>

<Navbar {siteName} />
<Aside>
  <Nav {navClass}>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
  <Nav {navClass}>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
</Aside>

About page
